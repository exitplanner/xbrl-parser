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
  grossProfitLoss?: number;

  /**
   * Gross revenue.
   * da: Nettoomsætning
   */
  revenue?: number;

  /**
   * Gross result
   * da: Bruttoresultat
   */
  grossResult?: number;

  /**
   * Profit or loss for the year, aka. result after taxes.
   * da: Årets resultat
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
  employeeExpenses: number;

  /**
   * da: af- og nedskrivninger
   */
  depreciationAmortization?: number;

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
   * da: Andre finansielle omkostninger
   */
  otherFinancialExpenses?: number;

  /**
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
   * This is the result before financial posts, i.e. it (should be) EBITDA -
   * depreciation/amortization.
   * da: Driftsresultat/resultat før finansielle poster
   */
  profitLossFromOperatingActivities: number;
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
     * da: Anlægsaktiver
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
     * da: Omsætningsaktiver
     */
    currentAssets: {
      total?: number;

      /**
       * da: Varebeholdninger
       */
      inventories?: number;

      /**
       * da: Likvide beholdninger
       */
      cashAndCashEquivalents?: number;

      /**
       * da: Tilgodehavender
       */
      shorttermReceivables?: number;
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
       * da: Kortfristede gældsforpligtelser
       */
      shorttermLiabilities?: number;

      /**
       * da: Langfristede gældsforpligtelser
       */
      longtermLiabilities?: number;
    };
  }
}

/**
 * Represents a single annual report
 */
export interface AnnualReport {
  VAT: string;

  /** Currency used for reporting */
  currency: string;

  /** The period that the report is for */
  period: Period;

  incomeStatement: IncomeStatement;
  balance: Balance;
}