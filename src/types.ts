import type { Period } from './xbrl';

/**
 * The income statement. Whether or not a number is required to be present is
 * based on observation -- not taxonomy. For example, almost all reports include
 * the profitLoss field and it has been made required in this extraction for that reason.
 * 
 * Danish: hovedtal/resultatopgørelse
 */
export interface IncomeStatement {
  /**
   * This number can both positive and negative!
   * Gross profit/loss for the year.
   * da: Bruttofortjeneste/Bruttotab
   */
  grossProfitLoss: number;

  /**
   * Gross revenue.
   * da: Nettoomsætning
   */
  revenue?: number;

  /**
   * Cost of sales
   * da: Vareforbrug
   */
  costOfSales?: number;

  /**
   * Change in inventories of finished goods, work in progress and goods for resale
   * da: Ændring i lagre af færdigvarer og varer under fremstilling
   */
  changeInInventory?: number;

  /**
   * Own work capitalised
   * da: Arbejde udført for egen regning og opført under aktiver
   */
  ownWorkCapitalized?: number;

  /**
   * Gross result
   * da: Bruttoresultat
   */
  grossResult?: number;

  /**
   * Profit or loss for the year, aka. result after taxes.
   * da: Årets resultat
   * us-gaap: Net income
   */
  profitLoss: number;

  /**
   * This is the total. Might be combined from multiple sub-fields.
   * da: skat
   */
  tax: number;

  /**
   * Total employee expenses.
   * da: Personaleomkostninger
   */
  employeeExpenses?: number;

  /**
   * da: af- og nedskrivninger
   */
  depreciationAmortization: number;

  /**
   * da: Andre driftsindtægter
   */
  otherOperatingIncome?: number;

  /**
   * da: Andre diftsomkostninger
   */
  otherOperatingExpenses?: number;

  /**
   * da: Eksterne driftsomkostninger
   */
  externalExpenses?: number;

  /**
   * In Danish taxonomy, this probably includes interest
   * da: Andre finansielle omkostninger
   */
  otherFinancialExpenses?: number;

  /**
   * In Danish taxonomy, this probably includes interest
   * da: Andre finansielle indkomster
   */
  otherFinancialIncome?: number;

  /**
   * The EBITDA is not included as its own field in XBRL. It is calculated from
   * other (possibly empty) fields.
   */
  calculatedEBITDA: number;

  /**
   * The EBIT is not directly included in its own field, but is sometimes indirectly included.
   * @see profitLossBeforeTax
   */
  calculatedEBIT: number;

  /**
   * Same as EBIT, but extracted from its own field.
   * da: Resultat før skat
   */
  profitLossBeforeTax: number;

  /**
   * This is the result before financial posts, i.e. it (should be):
   * EBITDA - depreciation/amortization.
   * da: Driftsresultat/resultat før finansielle poster/primært resultat
   */
  profitLossFromOperatingActivities: number;

  /**
   * Interest expenses
   * da: se otherFinancialExpenses
   */
  interestExpense?: number;

  /**
   * Interest and dividend income
   * da: se otherFinancialIncome
   */
  interestAndDividendIncome?: number;
}

export interface Balance {
  /**
   * The date of the balance.
   */
  date: string;

  /**
   * da: Aktiver
   */
  assets: {
    total: number;

    /**
     * da: Anlægsaktiver/langfristede aktiver
     */
    noncurrentAssets: {
      total?: number;

      /**
       * da: Immaterielle aktiver/immaterielle anlægsaktiver
       */
      intangibleAssets: {
        total?: number;

        /**
         * da: Goodwill
         */
        goodwill?: number;

        /**
         * Projects that have been completed.
         * da: Færdiggjorte udviklingsprojekter.
         */
        completedDevelopmentProjects?: number;
      };

      /**
       * Also known as "property plant and equipment"
       * da: Materielle aktiver/Materielle anlægsaktiver
       */
      tangibleAssets: {
        total?: number;
      }

      /**
       * Also known as "long term investments and receivables"
       * da: Finansielle anlægsaktiver
       */
      financialAssets: {
        total?: number;
      }
    };

    /**
     * da: Omsætningsaktiver/kortfristede aktiver
     */
    currentAssets: {
      total?: number;

      /**
       * da: Varebeholdninger
       */
      inventories?: {
        total?: number;
      },

      /**
       * da: Likvide beholdninger
       */
      cashAndCashEquivalents?: number;

      /**
       * da: Tilgodehavender
       */
      shorttermReceivables: {
        total?: number;

        /**
         * da: Tilgodehavender fra salg og tjenesteydelser
         */
        shorttermTradeReceivables?: number;

        /**
         * da: Kortfristede tilgodehavender hos tilknyttede virksomheder
         */
        shorttermReceivablesFromGroupEnterprises?: number;

        /**
         * Kortfristet tilgodehavende skat
         */
        shorttermTaxReceivables?: number;
      }

      /**
       * da: Værdipapirer og kapitalandele
       */
      shorttermInvestments: {
        total?: number;
      }
    }
  };

  /**
   * da: Passiver
   */
  liabilitiesAndEquity: {
    total: number;

    /**
     * da: Egenkapital
     */
    equity: {
      total?: number;

      /**
       * da: Anpartskapital/virksomhedskapital
       */
      contributedCapital?: number;

      /**
       * da: Overført kapital
       */
      retainedEarnings?: number;
    };

    /**
     * da: Hensatte forpligtelser
     */
    provisions: {
      total: number;
    };

    /**
     * Also known as "debt"
     * da: Gældsforpligtelser
     */
    liabilitiesOtherThanProvisions: {
      total?: number;

      /**
       * da: Kortfristede forpligtelser/gældsforpligtelser
       */
      shorttermLiabilities: {
        total?: number;

        /**
         * da: Kortfristet gæld til kreditinstituter
         */
        shorttermDebtToCreditInstitutions?: number;

        /**
         * da: Kortfristet gæld til banker
         */
        shorttermDebtToBanks?: number;

        /**
         * da: Kortfristet gæld til realkreditinstitutter
         */
        shorttermMortgageDebt?: number;

        /**
         * da: Kortfristet gæld til kreditinstitutter i øvrigt
         */
        shorttermDebtToOtherCreditInstitutions?: number;

        /**
         * da: Gæld til tilknyttede virksomheder
         */
        shorttermPayablesToGroupEnterprises?: number;

        /**
         * da: Gæld til associerede virksomheder
         */
        shorttermPayablesToAssociates?: number;

        /**
         * da: Gæld til kapitalinteresser
         */
        shorttermPayablesToParticipatingInterests?: number;

        /**
         * da: Gæld til joint ventures
         */
        shorttermPayablesToJointVentures?: number;

        /**
         * da: Kortfristet gæld til selskabsdeltagere og ledelse
         */
        shorttermPayablesToShareholdersAndManagement?: number;

        /**
         * Kortfristet skyldig skat
         */
        shorttermTaxPayables?: number;
      }

      /**
       * da: Langfristede forpligtelser/gældsforpligtelser
       */
      longtermLiabilities: {
        total?: number;

        /**
         * da: Langfristet gæld til kreditinstituter
         */
        longtermDebtToCreditInstitutions?: number;

        /**
         * da: Langfristet gæld til banker
         */
        longtermDebtToBanks?: number;

        /**
         * da: Langfristet gæld til realkreditinstitutter
         */
        longtermMortgageDebt?: number;

        /**
         * da: Langfristet gæld til kreditinstitutter i øvrigt
         */
        longtermDebtToOtherCreditInstitutions?: number;

        /**
         * da: Gæld til tilknyttede virksomheder (langfristede)
         */
        longtermPayablesToGroupEnterprises?: number;

        /**
         * da: Gæld til associerede virksomheder (langfristede)
         */
        longtermPayablesToAssociates?: number;

        /**
         * da: Gæld til kapitalinteresser (langfristede)
         */
        longtermPayablesToParticipatingInterests?: number;

        /**
         * da: Gæld til joint ventures (langfristet)
         */
        longtermPayablesToJointVentures?: number;

        /**
         * Skyldig skat (langfristet)
         */
        longtermTaxPayables?: number;
      }
    };
  }
}

export interface AnnualReport {
  /** Currency used for reporting */
  currency: string;

  /** The period that the report is for */
  period: Period;

  incomeStatement: IncomeStatement;
  balance: Balance;
}

/**
 * Represents a single annual report
 */
export interface AnnualReportDK extends AnnualReport {
  VAT: string;
}
