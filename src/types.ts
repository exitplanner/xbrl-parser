/**
 * The income statement. Whether or not a number is required to be present is
 * based on observation -- not taxonomy. For example, almost all reports include
 * the profitLoss field and it has been made required in this extraction for that reason.
 * 
 * Danish: hovedtal/resultatopgørelse
 */
export interface IncomeStatement {
  /**
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
   * depreciation.
   * da: Driftsresultat/resultat før finansielle poster
   */
  profitLossFromOperatingActivities: number;
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
}

export interface Period {
  id: string;
  startDate: string;
  endDate: string;
}