// Initially created by quicktype.
// - The names might not make sense.
// - Some of them are renamed manually.
// - Some extra types have been added based on taxonomies.

export interface XBRLDocument<T extends XbrliXbrl> {
  '?xml': XML;
  'xbrli:xbrl'?: T;
}

export interface XML {
  '@_version': string;
  '@_encoding': string;
}

export interface StringNode {
  '#text': string;
  '@_contextRef': string;
  '@_xml:lang'?: string;
}

export interface Identifier {
  '#text': number;
  '@_scheme': string;
}

export interface XbrldiExplicitMember {
  '#text': string;
  '@_dimension': string;
}

export interface ScenarioXbrldiTypedMember {
  'd:auditorIdentifier'?: number;
  '@_dimension': string;
  'd:memberOfBoardIdentifier'?: number;
  'g:relatedEntityIdentifier'?: number;
  'f:relatedEntityIdentifier'?: number;
}

export interface DIdentificationNumberCvrOfAuditFirm {
  '#text': number;
  '@_contextRef': string;
}

export interface NumberWithUnitRef {
  '#text': number;
  '@_contextRef': string;
  '@_unitRef': string;
  '@_decimals': string;
  '@_xml:lang'?: string;
}

export interface LinkSchemaRef {
  '@_xlink:type': string;
  '@_xlink:href': string;
}

export interface Unit {
  measure: string;
  '@_id': string;
}

export interface XbrliXbrl {
  '@_xml:lang'?: string;
  '@_xmlns:arr'?: string;
  '@_xmlns:cmn': string;
  '@_xmlns:dst'?: string;
  '@_xmlns:entry'?: string;
  '@_xmlns:eogs'?: string;
  '@_xmlns:esg'?: string;
  '@_xmlns:fsa': string;
  '@_xmlns:gen'?: string;
  '@_xmlns:gsd': string;
  '@_xmlns:iso4217': string;
  '@_xmlns:ix'?: string;
  '@_xmlns:label'?: string;
  '@_xmlns:link': string;
  '@_xmlns:mrv': string;
  '@_xmlns:msg'?: string;
  '@_xmlns:nonnum'?: string;
  '@_xmlns:num'?: string;
  '@_xmlns:ref'?: string;
  '@_xmlns:sob': string;
  '@_xmlns:tax'?: string;
  '@_xmlns:tch'?: string;
  '@_xmlns:valm'?: string;
  '@_xmlns:variable'?: string;
  '@_xmlns:xbrldi': string;
  '@_xmlns:xbrldt'?: string;
  '@_xmlns:xbrli': string;
  '@_xmlns:xl'?: string;
  '@_xmlns:xlink': string;
  '@_xmlns:xsd'?: string;
  '@_xmlns:xsi'?: string;
  '@_xsi:schemaLocation'?: string;
  'link:schemaRef': LinkSchemaRef;
  'xbrli:context': XbrliContext[];
  'xbrli:unit': XbrliUnitElement[];
}

export interface XbrliXbrlDK extends XbrliXbrl {
  'arr:AddresseeOfAuditorsReportOnAuditedFinancialStatements'?: StringNode;
  'arr:AddresseeOfAuditorsReportOnExtendedReviewOfFinancialStatements'?: StringNode;
  'arr:DescriptionOfQualificationsOfAuditedFinancialStatements'?: StringNode;
  'arr:DescriptionOfQualificationsOfFinancialStatementsExtendedReview'?: StringNode;
  'arr:IndependentAuditorsReportsAudit'?: StringNode;
  'arr:InformationOnSignatureOfAuditors'?: StringNode;
  'arr:OpinionOnAuditedFinancialStatements'?: StringNode;
  'arr:OpinionOnFinancialStatementsExtendedReview'?: StringNode;
  'arr:SignatureOfAuditorsDate'?: StringNode;
  'arr:SignatureOfAuditorsPlace'?: StringNode;
  'arr:StatementOfAuditorsResponsibilityExtendedReview'?: StringNode;
  'arr:StatementOfAuditorsResponsibilityForAuditAndAuditPerformed'?: StringNode;
  'arr:StatementOfExecutiveAndSupervisoryBoardsResponsibilityForFinancialStatements'?: StringNode;
  'arr:StatementOfExecutiveAndSupervisoryBoardsResponsibilityForFinancialStatementsExtendedReview'?: StringNode;
  'arr:StatementOnManagementsReviewAuditorsReportOnAuditedFinancialStatements'?: StringNode;
  'arr:TypeOfBasisForModifiedOpinionOnAuditedFinancialStatements'?: StringNode;
  'arr:TypeOfModifiedOpinionOnAuditedFinancialStatements'?: StringNode;
  'cmn:DescriptionOfAuditor'?: StringNode[] | StringNode;
  'cmn:IdentificationNumberCvrOfAuditFirm'?: DIdentificationNumberCvrOfAuditFirm[] | GsdAddressOfAuditorPostCodeIdentifier;
  'cmn:IdentificationNumberOfAuditor'?: StringNode[] | StringNode;
  'cmn:NameAndSurnameOfAuditor'?: StringNode[] | StringNode;
  'cmn:NameAndSurnameOfMemberOfExecutiveBoard': StringNode[] | StringNode;
  'cmn:NameAndSurnameOfMemberOfSupervisoryBoard'?: StringNode[];
  'cmn:NameOfAuditFirm'?: StringNode[] | StringNode;
  'cmn:TitleOfMemberOfExecutiveBoard'?: StringNode;
  'cmn:TitleOfMemberOfSupervisoryBoard'?: StringNode;
  'cmn:TypeOfAuditorAssistance': StringNode;
  'fsa:AccountingPoliciesAreUnchangedFromPreviousPeriod': BooleanWithRef;
  'fsa:Adjustments'?: NumberWithUnitRef[];
  'fsa:AdjustmentsForDecreaseIncreaseInWorkingCapital'?: NumberWithUnitRef[];
  'fsa:AmountOfComponentOfCashFlowsFromUsedInFinancingActivities'?: NumberWithUnitRef[];
  'fsa:Assets': NumberWithUnitRef[];
  'fsa:AverageNumberOfEmployees'?: NumberWithUnitRef[];
  'fsa:CashAndCashEquivalents': NumberWithUnitRef[];
  'fsa:CashAndCashEquivalentsConcerningCashflowStatement'?: NumberWithUnitRef[];
  'fsa:CashFlowFromOperatingActivitiesBeforeFinancialItems'?: NumberWithUnitRef[];
  'fsa:CashFlowFromOrdinaryOperatingActivities'?: NumberWithUnitRef[];
  'fsa:CashFlowsFromUsedInFinancingActivities'?: NumberWithUnitRef[];
  'fsa:CashFlowsFromUsedInInvestingActivities'?: NumberWithUnitRef[];
  'fsa:CashFlowsFromUsedInOperatingActivities'?: NumberWithUnitRef[];
  'fsa:ChangeInInventoriesOfFinishedGoodsWorkInProgressAndGoodsForResale'?: NumberWithUnitRef[];
  'fsa:ClassOfReportingEntity': StringNode;
  'fsa:CompletedDevelopmentProjects'?: NumberWithUnitRef[];
  'fsa:ContractWorkInProgress'?: NumberWithUnitRef[];
  'fsa:ContributedCapital': NumberWithUnitRef[];
  'fsa:ContributionFromGroup'?: NumberWithUnitRef[];
  'fsa:CostOfSales'?: NumberWithUnitRef[];
  'fsa:CurrentAssets': NumberWithUnitRef[];
  'fsa:CurrentDeferredTaxAssets'?: NumberWithUnitRef[];
  'fsa:DeferredIncomeAssets'?: NumberWithUnitRef[];
  'fsa:DepositsLongtermInvestmentsAndReceivables'?: NumberWithUnitRef[];
  'fsa:DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss'?: NumberWithUnitRef[];
  'fsa:DescriptionMethodsOfRecognitionAndMeasurementBasisForCashFlowsStatement'?: StringNode;
  'fsa:DescriptionOfAccountingPoliciesRelatedToDerivativeFinancialInstruments'?: StringNode;
  'fsa:DescriptionOfGeneralMattersRelatedToRecognitionMeasurementAndChangesInAccountingPolicies'?: StringNode;
  'fsa:DescriptionOfMethodsOfAmortisationOfNoncurrentAssets'?: StringNode;
  'fsa:DescriptionOfMethodsOfCurrentTaxReceivablesAndLiabilities'?: StringNode;
  'fsa:DescriptionOfMethodsOfForeignCurrencies'?: StringNode;
  'fsa:DescriptionOfMethodsOfImpairmentLossesAndDepreciation'?: StringNode;
  'fsa:DescriptionOfMethodsOfLeases'?: StringNode;
  'fsa:DescriptionOfMethodsOfPrepayments'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfAssetsAndLiabilities'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfCashAndCashEquivalents'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfContractWorkInProgress'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfCostOfSales'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfDeferredIncomeAssets'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfDeferredIncomeLiabilities'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfEmployeeBenefitExpense'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfExternalExpenses'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfFinanceExpenses'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfFinanceIncome'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfFinanceIncomeAndExpenses'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfGrossProfitLoss'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfIncomeAndExpensesFromInvestmentsInGroupEnterprisesAndAssociates'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfIncomeStatementItems'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfIntangibleAssets'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfInventories'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfLeaseholdImprovements'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfLiabilitiesOtherThanProvisions'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfOtherOperatingIncomeAndExpenses'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfPropertyPlantAndEquipment'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfProvisions'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfReceivables'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfRevenue'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfTaxExpenses'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfTaxPayablesAndDeferredTax'?: StringNode;
  'fsa:DescriptionOfMethodsOfStatingKeyFiguresAndFinancialRatiosIncludedInManagementReview'?: StringNode;
  'fsa:DescriptionOfMethodsOfTranslationOfForeignCurrencies'?: StringNode;
  'fsa:DevelopmentProjectsInProgress'?: NumberWithUnitRef[];
  'fsa:DisclosureOfAccountingPolicies'?: StringNode;
  'fsa:DisclosureOfAnyUncertaintyConnectedWithRecognitionOrMeasurement'?: StringNode;
  'fsa:DisclosureOfContingentLiabilities'?: StringNode;
  'fsa:DisclosureOfContributedCapital'?: StringNode;
  'fsa:DisclosureOfDeferredIncome'?: StringNode;
  'fsa:DisclosureOfDeferredTaxAssetsAndLiabilities'?: StringNode;
  'fsa:DisclosureOfDepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss'?: StringNode;
  'fsa:DisclosureOfEmployeeBenefitsExpense': StringNode;
  'fsa:DisclosureOfEquity'?: StringNode;
  'fsa:DisclosureOfIntangibleAssets'?: StringNode;
  'fsa:DisclosureOfInvestments'?: StringNode;
  'fsa:DisclosureOfLongtermLiabilities'?: StringNode;
  'fsa:DisclosureOfMortgagesAndCollaterals'?: StringNode;
  'fsa:DisclosureOfOtherArrangementsNotRecognisedInBalanceSheet'?: StringNode;
  'fsa:DisclosureOfOtherFinanceExpenses'?: StringNode;
  'fsa:DisclosureOfOtherFinanceIncome'?: StringNode;
  'fsa:DisclosureOfOtherPayables'?: StringNode;
  'fsa:DisclosureOfOtherProvisions'?: StringNode;
  'fsa:DisclosureOfOwnership'?: StringNode;
  'fsa:DisclosureOfPropertyPlantAndEquipment'?: StringNode;
  'fsa:DisclosureOfProvisionsForDeferredTax'?: StringNode;
  'fsa:DisclosureOfRelatedParties'?: StringNode;
  'fsa:DisclosureOfRevenue'?: StringNode;
  'fsa:DisclosureOfScopeAndNatureOfDerivativeFinancialInstruments'?: StringNode;
  'fsa:DisclosureOfSignificantEventsOccurringAfterEndOfReportingPeriod'?: StringNode;
  'fsa:DisclosureOfTaxExpenseOnOrdinaryActivities'?: StringNode;
  'fsa:DisclosureOfTaxExpenses'?: StringNode;
  'fsa:DisclosureOfTheManagementsProposedDistributionOfProfitLoss'?: StringNode;
  'fsa:Dividend'?: NumberWithUnitRef[];
  'fsa:DividendPaid'?: NumberWithUnitRef[];
  'fsa:DividendPaidCashFlow'?: NumberWithUnitRef[];
  'fsa:DividendsFromTreasuryShares'?: NumberWithUnitRef[];
  'fsa:EmployeeBenefitsExpense': NumberWithUnitRef[];
  'fsa:Equity': NumberWithUnitRef[];
  'fsa:EquityTransfersToReserves'?: NumberWithUnitRef[];
  'fsa:ExplanationOfNotDisclosingCashFlowsStatements'?: StringNode;
  'fsa:ExplanationOfPrepayments'?: StringNode;
  'fsa:ExplanationOfShorttermLiability'?: StringNode[];
  'fsa:ExternalExpenses'?: NumberWithUnitRef[];
  'fsa:FixturesFittingsToolsAndEquipment'?: NumberWithUnitRef[];
  'fsa:Goodwill'?: NumberWithUnitRef[];
  'fsa:GrossProfitLoss'?: NumberWithUnitRef[];
  'fsa:GrossResult'?: NumberWithUnitRef[];
  'fsa:IncomeFromInvestmentsInGroupEnterprises'?: NumberWithUnitRef[];
  'fsa:IncomeTaxesPaidRefundClassifiedAsOperatingActivities'?: NumberWithUnitRef[];
  'fsa:IncreaseDecreaseOfEquityThroughChangesInAccountingPolicies'?: NumberWithUnitRef[];
  'fsa:InformationOnAuditorsFees'?: StringNode;
  'fsa:InformationOnChangesAndEffectsOfChangesOnRecognitionAndMeasurementBasisResultingFromChangesInAccountingEstimatesOrErrors'?: StringNode;
  'fsa:InformationOnConsolidatedFinancialStatements'?: StringNode;
  'fsa:InformationOnContractWorkInProgress'?: StringNode;
  'fsa:InformationOnOperatingSegmentsAndGeographicalMarkets'?: StringNode;
  'fsa:InformationOnOtherReceivables'?: StringNode;
  'fsa:InformationOnRelatedEntities'?: StringNode;
  'fsa:InformationOnRemunerationOfManagementCategoriesAndSpecialIncentiveProgrammes'?: StringNode;
  'fsa:InformationOnReportingClassOfEntity'?: StringNode;
  'fsa:InformationOnSegments'?: StringNode;
  'fsa:InformationOnSpecificPrerequisitesRegardingDevelopmentProjectsAndTaxAssets'?: StringNode;
  'fsa:IntangibleAssets'?: NumberWithUnitRef[];
  'fsa:InterestPaidClassifiedAsOperatingActivities'?: NumberWithUnitRef[];
  'fsa:InterestReceivedClassifiedAsOperatingActivities'?: NumberWithUnitRef[];
  'fsa:Inventories'?: NumberWithUnitRef[];
  'fsa:InvestmentInPropertyPlantAndEquipment'?: NumberWithUnitRef[];
  'fsa:LandAndBuildings'?: NumberWithUnitRef[];
  'fsa:LeaseholdImprovements'?: NumberWithUnitRef[];
  'fsa:LiabilitiesAndEquity': NumberWithUnitRef[];
  'fsa:LiabilitiesOtherThanProvisions': NumberWithUnitRef[];
  'fsa:LongtermDebtToBanks'?: NumberWithUnitRef[];
  'fsa:LongtermDebtToCreditInstitutions'?: NumberWithUnitRef[];
  'fsa:LongtermDebtToOtherCreditInstitutions'?: NumberWithUnitRef[];
  'fsa:LongtermDeferredIncome'?: NumberWithUnitRef[];
  'fsa:LongtermInvestmentsAndReceivables'?: NumberWithUnitRef[];
  'fsa:LongtermLiabilitiesOtherThanProvisions'?: NumberWithUnitRef[];
  'fsa:LongtermMortgageDebt'?: NumberWithUnitRef[];
  'fsa:LongtermPayablesToAssociates'?: NumberWithUnitRef[];
  'fsa:LongtermPayablesToGroupEnterprises'?: NumberWithUnitRef[];
  'fsa:LongtermPayablesToJointVentures'?: NumberWithUnitRef[];
  'fsa:LongtermPayablesToParticipatingInterests'?: NumberWithUnitRef[];
  'fsa:LongtermTaxPayables'?: NumberWithUnitRef[];
  'fsa:ManufacturedGoodsAndGoodsForResale'?: NumberWithUnitRef[];
  'fsa:NameOfComponentOfCashFlowsFromUsedInFinancingActivities'?: StringNode[];
  'fsa:NetIncreaseDecreaseInCashAndCashEquivalents'?: NumberWithUnitRef[];
  'fsa:NoncurrentAssets'?: NumberWithUnitRef[];
  'fsa:NoncurrentDeferredTaxAssets'?: NumberWithUnitRef[];
  'fsa:NumberOfEmployees'?: NumberWithUnitRef[];
  'fsa:OtherDisclosures'?: StringNode;
  'fsa:OtherExternalExpenses'?: NumberWithUnitRef[];
  'fsa:OtherFinanceExpenses'?: NumberWithUnitRef[];
  'fsa:OtherFinanceIncome'?: NumberWithUnitRef[];
  'fsa:OtherLongtermPayables'?: NumberWithUnitRef[];
  'fsa:OtherLongtermReceivables'?: NumberWithUnitRef[];
  'fsa:OtherOperatingExpenses'?: NumberWithUnitRef[];
  'fsa:OtherOperatingIncome'?: NumberWithUnitRef[];
  'fsa:OtherPayablesIncludingTaxPayablesLiabilitiesOtherThanProvisionsLongterm'?: NumberWithUnitRef[];
  'fsa:OtherPayablesIncludingTaxPayablesLiabilitiesOtherThanProvisionsShortterm'?: NumberWithUnitRef[];
  'fsa:OtherProvisions'?: NumberWithUnitRef[];
  'fsa:OtherShorttermPayables'?: NumberWithUnitRef[];
  'fsa:OtherShorttermReceivables'?: NumberWithUnitRef[];
  'fsa:PrepaymentsForGoods'?: NumberWithUnitRef[];
  'fsa:ProceedsFromSalesOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities'?: NumberWithUnitRef[];
  'fsa:ProfitLoss': NumberWithUnitRef[];
  'fsa:ProfitLossFromContinuingOperations'?: NumberWithUnitRef[];
  'fsa:ProfitLossFromOrdinaryActivitiesBeforeTax': NumberWithUnitRef[];
  'fsa:ProfitLossFromOrdinaryOperatingActivities': NumberWithUnitRef[];
  'fsa:PropertyPlantAndEquipment'?: NumberWithUnitRef[];
  'fsa:PropertyPlantAndEquipmentInProgress'?: NumberWithUnitRef[];
  'fsa:ProposedDividendRecognisedInEquity'?: NumberWithUnitRef[];
  'fsa:Provisions'?: NumberWithUnitRef[];
  'fsa:ProvisionsForDeferredTax'?: NumberWithUnitRef[];
  'fsa:PurchaseOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities'?: NumberWithUnitRef[];
  'fsa:PurchaseOfTreasuryShares'?: NumberWithUnitRef[];
  'fsa:RawMaterialsAndConsumablesUsed'?: NumberWithUnitRef[];
  'fsa:ReserveForDevelopmentExpenditure'?: NumberWithUnitRef[];
  'fsa:RestOfOtherFinanceExpenses'?: NumberWithUnitRef[];
  'fsa:ResultsFromNetFinancials'?: NumberWithUnitRef[];
  'fsa:RetainedEarnings': NumberWithUnitRef[];
  'fsa:Revenue'?: NumberWithUnitRef[];
  'fsa:SelectedElementsFromReportingClassC'?: BooleanWithRef;
  'fsa:SelectedElementsFromReportingClassD'?: BooleanWithRef;
  'fsa:ShorttermContractWorkInProgressLiabilities'?: NumberWithUnitRef[];
  'fsa:ShorttermDebtToBanks'?: NumberWithUnitRef[];
  'fsa:ShorttermDebtToBanksCashFlowsStatement'?: NumberWithUnitRef[];
  'fsa:ShorttermDebtToCreditInstitutions'?: NumberWithUnitRef[];
  'fsa:ShorttermDebtToOtherCreditInstitutions'?: NumberWithUnitRef[];
  'fsa:ShorttermDeferredIncome'?: NumberWithUnitRef[];
  'fsa:ShorttermInvestments'?: NumberWithUnitRef[];
  'fsa:ShorttermLiabilitiesOtherThanProvisions': NumberWithUnitRef[];
  'fsa:ShorttermMortgageDebt'?: NumberWithUnitRef[];
  'fsa:ShorttermPartOfLongtermLiabilitiesOtherThanProvisions'?: NumberWithUnitRef[];
  'fsa:ShorttermPayablesToAssociates'?: NumberWithUnitRef[];
  'fsa:ShorttermPayablesToGroupEnterprises'?: NumberWithUnitRef[];
  'fsa:ShorttermPayablesToJointVentures'?: NumberWithUnitRef[];
  'fsa:ShorttermPayablesToParticipatingInterest'?: NumberWithUnitRef[];
  'fsa:ShorttermPayablesToShareholdersAndManagement'?: NumberWithUnitRef[];
  'fsa:ShorttermPrepaymentsReceivedFromCustomers'?: NumberWithUnitRef[];
  'fsa:ShorttermReceivables': NumberWithUnitRef[];
  'fsa:ShorttermReceivablesFromGroupEnterprises'?: NumberWithUnitRef[];
  'fsa:ShorttermTaxPayables'?: NumberWithUnitRef[];
  'fsa:ShorttermTaxReceivables'?: NumberWithUnitRef[];
  'fsa:ShorttermTradePayables': NumberWithUnitRef[];
  'fsa:ShorttermTradeReceivables'?: NumberWithUnitRef[];
  'fsa:StatementOfChangesInEquity'?: StringNode;
  'fsa:TaxExpense'?: NumberWithUnitRef[];
  'fsa:TaxExpenseOnExtraordinaryEvents'?: NumberWithUnitRef[];
  'fsa:TaxExpenseOnOrdinaryActivities'?: NumberWithUnitRef[];
  'fsa:WorkPerformedByEntityAndCapitalised'?: NumberWithUnitRef[];
  'gsd:AddressOfAuditorDistrictName'?: StringNode;
  'gsd:AddressOfAuditorPostCodeIdentifier'?: GsdAddressOfAuditorPostCodeIdentifier;
  'gsd:AddressOfAuditorStreetBuildingIdentifier'?: GsdAddressOfAuditorPostCodeIdentifier;
  'gsd:AddressOfAuditorStreetName'?: StringNode;
  'gsd:AddressOfReportingEntityCountry'?: StringNode;
  'gsd:AddressOfReportingEntityCountryIdentificationCode'?: StringNode;
  'gsd:AddressOfReportingEntityDistrictName'?: StringNode;
  'gsd:AddressOfReportingEntityPostCodeIdentifier'?: GsdAddressOfAuditorPostCodeIdentifier;
  'gsd:AddressOfReportingEntityStreetBuildingIdentifier'?: GsdAddressOfReportingEntityStreetBuildingIdentifier;
  'gsd:AddressOfReportingEntityStreetName'?: StringNode;
  'gsd:AddressOfSubmittingEnterprisePostcodeAndTown': StringNode;
  'gsd:AddressOfSubmittingEnterpriseStreetAndNumber': StringNode;
  'gsd:DateOfFoundationOfReportingEntity'?: StringNode;
  'gsd:DateOfGeneralMeeting': StringNode;
  'gsd:HomepageOfReportingEntity'?: StringNode;
  'gsd:IdentificationNumberCvrOfReportingEntity': GsdAddressOfAuditorPostCodeIdentifier;
  'gsd:IdentificationNumberCvrOfSubmittingEnterprise': GsdAddressOfAuditorPostCodeIdentifier;
  'gsd:InformationOnTypeOfSubmittedReport': StringNode;
  'gsd:NameAndSurnameOfChairmanOfGeneralMeeting': StringNode;
  'gsd:NameOfReportingEntity': StringNode;
  'gsd:NameOfSubmittingEnterprise': StringNode;
  'gsd:PrecedingReportingPeriodStartDate': StringNode;
  'gsd:PredingReportingPeriodEndDate': StringNode;
  'gsd:RegisteredOfficeOfReportingEntity'?: StringNode;
  'gsd:ReportingPeriodEndDate': StringNode;
  'gsd:ReportingPeriodStartDate': StringNode;
  'gsd:TelephoneNumberOfReportingEntity'?: StringNode;
  'gsd:ToolForPreparingTheXBRLInstanceDocument'?: StringNode;
  'mrv:DescriptionOfAnyUncertaintyConnectedWithRecognitionOrMeasurement'?: StringNode;
  'mrv:DescriptionOfDevelopmentInActivitiesAndFinancialAffairs'?: StringNode;
  'mrv:DescriptionOfExpectedDevelopment'?: StringNode;
  'mrv:DescriptionOfNetProfitRelationToExpectedDevelopmentAssumedInPreviousReport'?: StringNode;
  'mrv:DescriptionOfPrimaryActivitiesOfEntity'?: StringNode;
  'mrv:DescriptionOfSignificantEventsOccurringAfterEndOfReportingPeriod'?: StringNode;
  'mrv:EquityRatio'?: NumberWithUnitRef[];
  'mrv:GrossMargin'?: NumberWithUnitRef[];
  'mrv:InformationOnCalculationOfKeyFiguresAndFinancialRatios'?: StringNode;
  'mrv:LinkToStatementOfCorporateSocialResponsibility'?: StringNode;
  'mrv:ManagementsReview'?: StringNode;
  'mrv:NameOfKeyFigureOrFinancialRatio'?: StringNode[];
  'mrv:OperatingMargin'?: NumberWithUnitRef[];
  'mrv:ReturnOnCapitalEmployed'?: NumberWithUnitRef[];
  'mrv:ReturnOnEquity'?: NumberWithUnitRef[];
  'mrv:StatementOfCorporateSocialResponsibility'?: StringNode;
  'mrv:StatementOfTargetFiguresAndPoliciesForTheUnderrepresentedGender'?: StringNode;
  'mrv:ValueOfKeyFigureOrFinancialRatio'?: NumberWithUnitRef[];
  'mrv:ValueOfKeyFigureOrFinancialRatioMonetary'?: NumberWithUnitRef[];
  'sob:ConfirmationThatAnnualReportIsPresentedInAccordanceWithRequirementsProvidedForByLegislationAnyStandardsAndRequirementsProvidedByArticlesOfAssociationOrByAgreement'?: StringNode;
  'sob:ConfirmationThatFinancialStatementGivesTrueAndFairViewOfAssetsLiabilitiesEquityFinancialPositionAndResults'?: StringNode;
  'sob:DateOfApprovalOfAnnualReport': StringNode;
  'sob:IdentificationOfApprovedAnnualReport'?: StringNode;
  'sob:ManagementsStatementAboutManagementsReview'?: StringNode;
  'sob:PlaceOfSignatureOfStatement'?: StringNode;
  'sob:RecommendationForApprovalOfAnnualReportByGeneralMeeting'?: StringNode;
  'sob:StatementByExecutiveAndSupervisoryBoards'?: StringNode;
  'sob:TheReportingEntityAppliesTheExceptionConcerningOptingOutOfTheStatementByManagementEtc'?: BooleanWithRef;
}

export interface XbrliXbrlUSGAAP extends XbrliXbrl {
  'dei:DocumentType': StringNode,
  'us-gaap:PropertyPlantAndEquipmentUsefulLife': StringNode[];
  'us-gaap:RevenueRemainingPerformanceObligationExpectedTimingOfSatisfactionPeriod1': StringNode[];
  'us-gaap:RevenueRemainingPerformanceObligationPercentage': NumberWithUnitRef[];
  'us-gaap:OperatingLeaseRightOfUseAssetStatementOfFinancialPositionExtensibleList': StringNode[];
  'us-gaap:FinanceLeaseRightOfUseAssetStatementOfFinancialPositionExtensibleList': StringNode[];
  'us-gaap:OperatingLeaseLiabilityCurrentStatementOfFinancialPositionExtensibleList': StringNode[];
  'us-gaap:OperatingLeaseLiabilityNoncurrentStatementOfFinancialPositionExtensibleList': StringNode[];
  'us-gaap:FinanceLeaseLiabilityCurrentStatementOfFinancialPositionExtensibleList': StringNode[];
  'us-gaap:FinanceLeaseLiabilityNoncurrentStatementOfFinancialPositionExtensibleList': StringNode[];
  'us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax': NumberWithUnitRef[];
  'us-gaap:CostOfGoodsAndServicesSold': NumberWithUnitRef[];
  'us-gaap:GrossProfit': NumberWithUnitRef[];
  'us-gaap:ResearchAndDevelopmentExpense': NumberWithUnitRef[];
  'us-gaap:SellingGeneralAndAdministrativeExpense': NumberWithUnitRef[];
  'us-gaap:OperatingExpenses': NumberWithUnitRef[];
  'us-gaap:OperatingIncomeLoss': NumberWithUnitRef[];
  'us-gaap:NonoperatingIncomeExpense': NumberWithUnitRef[];
  'us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest': NumberWithUnitRef[];
  'us-gaap:IncomeTaxExpenseBenefit': NumberWithUnitRef[];
  'us-gaap:NetIncomeLoss': NumberWithUnitRef[];
  'us-gaap:EarningsPerShareBasic': NumberWithUnitRef[];
  'us-gaap:EarningsPerShareDiluted': NumberWithUnitRef[];
  'us-gaap:WeightedAverageNumberOfSharesOutstandingBasic': NumberWithUnitRef[];
  'us-gaap:WeightedAverageNumberOfDilutedSharesOutstanding': NumberWithUnitRef[];
  'us-gaap:OtherComprehensiveIncomeLossForeignCurrencyTransactionAndTranslationAdjustmentNetOfTax': NumberWithUnitRef[];
  'us-gaap:OtherComprehensiveIncomeUnrealizedHoldingGainLossOnSecuritiesArisingDuringPeriodNetOfTax': NumberWithUnitRef[];
  'us-gaap:OtherComprehensiveIncomeLossReclassificationAdjustmentFromAOCIForSaleOfSecuritiesNetOfTax': NumberWithUnitRef[];
  'us-gaap:OtherComprehensiveIncomeLossAvailableForSaleSecuritiesAdjustmentNetOfTax': NumberWithUnitRef[];
  'us-gaap:OtherComprehensiveIncomeLossNetOfTaxPortionAttributableToParent': NumberWithUnitRef[];
  'us-gaap:ComprehensiveIncomeNetOfTax': NumberWithUnitRef[];
  'us-gaap:CashAndCashEquivalentsAtCarryingValue': NumberWithUnitRef[];
  'us-gaap:MarketableSecuritiesCurrent': NumberWithUnitRef[];
  'us-gaap:AccountsReceivableNetCurrent': NumberWithUnitRef[];
  'us-gaap:InventoryNet': NumberWithUnitRef[];
  'us-gaap:NontradeReceivablesCurrent': NumberWithUnitRef[];
  'us-gaap:OtherAssetsCurrent': NumberWithUnitRef[];
  'us-gaap:AssetsCurrent': NumberWithUnitRef[];
  'us-gaap:MarketableSecuritiesNoncurrent': NumberWithUnitRef[];
  'us-gaap:PropertyPlantAndEquipmentNet': NumberWithUnitRef[];
  'us-gaap:OtherAssetsNoncurrent': NumberWithUnitRef[];
  'us-gaap:AssetsNoncurrent': NumberWithUnitRef[];
  'us-gaap:Assets': NumberWithUnitRef[];
  'us-gaap:AccountsPayableCurrent': NumberWithUnitRef[];
  'us-gaap:OtherLiabilitiesCurrent': NumberWithUnitRef[];
  'us-gaap:ContractWithCustomerLiabilityCurrent': NumberWithUnitRef[];
  'us-gaap:CommercialPaper': NumberWithUnitRef[];
  'us-gaap:LongTermDebtCurrent': NumberWithUnitRef[];
  'us-gaap:LiabilitiesCurrent': NumberWithUnitRef[];
  'us-gaap:LongTermDebtNoncurrent': NumberWithUnitRef[];
  'us-gaap:OtherLiabilitiesNoncurrent': NumberWithUnitRef[];
  'us-gaap:LiabilitiesNoncurrent': NumberWithUnitRef[];
  'us-gaap:Liabilities': NumberWithUnitRef[];
  'us-gaap:CommonStockParOrStatedValuePerShare': NumberWithUnitRef[];
  'us-gaap:CommonStockSharesAuthorized': NumberWithUnitRef[];
  'us-gaap:CommonStockSharesIssued': NumberWithUnitRef[];
  'us-gaap:CommonStockSharesOutstanding': NumberWithUnitRef[];
  'us-gaap:CommonStocksIncludingAdditionalPaidInCapital': NumberWithUnitRef[];
  'us-gaap:RetainedEarningsAccumulatedDeficit': NumberWithUnitRef[];
  'us-gaap:AccumulatedOtherComprehensiveIncomeLossNetOfTax': NumberWithUnitRef[];
  'us-gaap:StockholdersEquity': NumberWithUnitRef[];
  'us-gaap:LiabilitiesAndStockholdersEquity': NumberWithUnitRef[];
  'us-gaap:StockIssuedDuringPeriodValueNewIssues': NumberWithUnitRef[];
  'us-gaap:AdjustmentsRelatedToTaxWithholdingForShareBasedCompensation': NumberWithUnitRef[];
  'us-gaap:AdjustmentsToAdditionalPaidInCapitalSharebasedCompensationRequisiteServicePeriodRecognitionValue': NumberWithUnitRef[];
  'us-gaap:Dividends': NumberWithUnitRef[];
  'us-gaap:StockRepurchasedAndRetiredDuringPeriodValue': NumberWithUnitRef[];
  'us-gaap:CommonStockDividendsPerShareDeclared': NumberWithUnitRef[];
  'us-gaap:CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalents': NumberWithUnitRef[];
  'us-gaap:DepreciationDepletionAndAmortization': NumberWithUnitRef[];
  'us-gaap:ShareBasedCompensation': NumberWithUnitRef[];
  'us-gaap:DeferredIncomeTaxExpenseBenefit': NumberWithUnitRef[];
  'us-gaap:OtherNoncashIncomeExpense': NumberWithUnitRef[];
  'us-gaap:IncreaseDecreaseInAccountsReceivable': NumberWithUnitRef[];
  'us-gaap:IncreaseDecreaseInInventories': NumberWithUnitRef[];
  'us-gaap:IncreaseDecreaseInOtherReceivables': NumberWithUnitRef[];
  'us-gaap:IncreaseDecreaseInOtherOperatingAssets': NumberWithUnitRef[];
  'us-gaap:IncreaseDecreaseInAccountsPayable': NumberWithUnitRef[];
  'us-gaap:IncreaseDecreaseInContractWithCustomerLiability': NumberWithUnitRef[];
  'us-gaap:IncreaseDecreaseInOtherOperatingLiabilities': NumberWithUnitRef[];
  'us-gaap:NetCashProvidedByUsedInOperatingActivities': NumberWithUnitRef[];
  'us-gaap:PaymentsToAcquireAvailableForSaleSecuritiesDebt': NumberWithUnitRef[];
  'us-gaap:ProceedsFromMaturitiesPrepaymentsAndCallsOfAvailableForSaleSecurities': NumberWithUnitRef[];
  'us-gaap:ProceedsFromSaleOfAvailableForSaleSecuritiesDebt': NumberWithUnitRef[];
  'us-gaap:PaymentsToAcquirePropertyPlantAndEquipment': NumberWithUnitRef[];
  'us-gaap:PaymentsToAcquireBusinessesNetOfCashAcquired': NumberWithUnitRef[];
  'us-gaap:PaymentsForProceedsFromOtherInvestingActivities': NumberWithUnitRef[];
  'us-gaap:NetCashProvidedByUsedInInvestingActivities': NumberWithUnitRef[];
  'us-gaap:PaymentsRelatedToTaxWithholdingForShareBasedCompensation': NumberWithUnitRef[];
  'us-gaap:PaymentsOfDividends': NumberWithUnitRef[];
  'us-gaap:PaymentsForRepurchaseOfCommonStock': NumberWithUnitRef[];
  'us-gaap:ProceedsFromIssuanceOfLongTermDebt': NumberWithUnitRef[];
  'us-gaap:RepaymentsOfLongTermDebt': NumberWithUnitRef[];
  'us-gaap:ProceedsFromRepaymentsOfCommercialPaper': NumberWithUnitRef[];
  'us-gaap:ProceedsFromPaymentsForOtherFinancingActivities': NumberWithUnitRef[];
  'us-gaap:NetCashProvidedByUsedInFinancingActivities': NumberWithUnitRef[];
  'us-gaap:CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsPeriodIncreaseDecreaseIncludingExchangeRateEffect': NumberWithUnitRef[];
  'us-gaap:IncomeTaxesPaidNet': NumberWithUnitRef[];
  'us-gaap:InterestPaidNet': NumberWithUnitRef[];
  'us-gaap:BasisOfPresentationAndSignificantAccountingPoliciesTextBlock': StringNode;
  'us-gaap:BasisOfAccountingPolicyPolicyTextBlock': StringNode;
  'us-gaap:FiscalPeriod': StringNode;
  'us-gaap:RevenueRecognitionPolicyTextBlock': StringNode;
  'us-gaap:CompensationRelatedCostsPolicyTextBlock': StringNode;
  'us-gaap:ScheduleOfEarningsPerShareBasicAndDilutedTableTextBlock': StringNode;
  'us-gaap:WeightedAverageNumberDilutedSharesOutstandingAdjustment': NumberWithUnitRef[];
  'us-gaap:EarningsPerSharePolicyTextBlock': StringNode;
  'us-gaap:CashAndCashEquivalentsPolicyTextBlock': StringNode;
  'us-gaap:MarketableSecuritiesPolicy': StringNode;
  'us-gaap:InventoryPolicyTextBlock': StringNode;
  'us-gaap:PropertyPlantAndEquipmentPolicyTextBlock': StringNode;
  'us-gaap:Depreciation': NumberWithUnitRef[];
  'us-gaap:DerivativesPolicyTextBlock': StringNode;
  'us-gaap:FairValueMeasurementPolicyPolicyTextBlock': StringNode;
  'us-gaap:IncomeTaxPolicyTextBlock': StringNode;
  'us-gaap:LesseeLeasesPolicyTextBlock': StringNode;
  'us-gaap:SegmentReportingPolicyPolicyTextBlock': StringNode;
  'us-gaap:RevenueFromContractWithCustomerTextBlock': StringNode;
  'us-gaap:DisaggregationOfRevenueTableTextBlock': StringNode;
  'us-gaap:ContractWithCustomerLiabilityRevenueRecognized': NumberWithUnitRef[];
  'us-gaap:ContractWithCustomerLiability': NumberWithUnitRef[];
  'us-gaap:FinancialInstrumentsDisclosureTextBlock': StringNode;
  'us-gaap:ScheduleOfCashCashEquivalentsAndShortTermInvestmentsTableTextBlock': StringNode;
  'us-gaap:Cash': NumberWithUnitRef[];
  'us-gaap:EquitySecuritiesFvNiCost': NumberWithUnitRef[];
  'us-gaap:EquitySecuritiesFvNiCurrentAndNoncurrent': NumberWithUnitRef[];
  'us-gaap:AvailableForSaleDebtSecuritiesAmortizedCostBasis': NumberWithUnitRef[];
  'us-gaap:AvailableForSaleDebtSecuritiesAccumulatedGrossUnrealizedGainBeforeTax': NumberWithUnitRef[];
  'us-gaap:AvailableForSaleDebtSecuritiesAccumulatedGrossUnrealizedLossBeforeTax': NumberWithUnitRef[];
  'us-gaap:AvailableForSaleSecuritiesDebtSecurities': NumberWithUnitRef[];
  'us-gaap:RestrictedInvestments': NumberWithUnitRef[];
  'us-gaap:AvailableForSaleSecuritiesDebtMaturitiesRollingYearTwoThroughFiveFairValue': NumberWithUnitRef;
  'us-gaap:AvailableForSaleSecuritiesDebtMaturitiesRollingYearSixThroughTenFairValue': NumberWithUnitRef;
  'us-gaap:AvailableForSaleSecuritiesDebtMaturitiesRollingAfterYearTenFairValue': NumberWithUnitRef;
  'us-gaap:AvailableForSaleSecuritiesDebtMaturitiesSingleMaturityDate': NumberWithUnitRef;
  'us-gaap:MaximumLengthOfTimeForeignCurrencyCashFlowHedge': StringNode[];
  'us-gaap:DerivativeNotionalAmount': NumberWithUnitRef[];
  'us-gaap:DerivativeAssetFairValueGrossAssetIncludingNotSubjectToMasterNettingArrangement': NumberWithUnitRef[];
  'us-gaap:FairValueConcentrationOfRiskDerivativeFinancialInstrumentsAssets': NumberWithUnitRef;
  'us-gaap:DerivativeLiabilityFairValueGrossLiabilityIncludingNotSubjectToMasterNettingArrangement': NumberWithUnitRef[];
  'us-gaap:DerivativeFairValueOfDerivativeNet': NumberWithUnitRef;
  'us-gaap:HedgedAssetFairValueHedge': NumberWithUnitRef[];
  'us-gaap:HedgedLiabilityFairValueHedge': NumberWithUnitRef[];
  'us-gaap:ConcentrationRiskPercentage1': NumberWithUnitRef[];
  'us-gaap:PropertyPlantAndEquipmentGross': NumberWithUnitRef[];
  'us-gaap:AccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment': NumberWithUnitRef[];
  'us-gaap:AccruedIncomeTaxesNoncurrent': NumberWithUnitRef[];
  'us-gaap:OtherAccruedLiabilitiesNoncurrent': NumberWithUnitRef[];
  'us-gaap:InvestmentIncomeInterestAndDividend': NumberWithUnitRef[];
  'us-gaap:InterestExpense': NumberWithUnitRef[];
  'us-gaap:OtherNonoperatingIncomeExpense': NumberWithUnitRef[];
  'us-gaap:CurrentFederalTaxExpenseBenefit': NumberWithUnitRef[];
  'us-gaap:DeferredFederalIncomeTaxExpenseBenefit': NumberWithUnitRef[];
  'us-gaap:FederalIncomeTaxExpenseBenefitContinuingOperations': NumberWithUnitRef[];
  'us-gaap:CurrentStateAndLocalTaxExpenseBenefit': NumberWithUnitRef[];
  'us-gaap:DeferredStateAndLocalIncomeTaxExpenseBenefit': NumberWithUnitRef[];
  'us-gaap:StateAndLocalIncomeTaxExpenseBenefitContinuingOperations': NumberWithUnitRef[];
  'us-gaap:CurrentForeignTaxExpenseBenefit': NumberWithUnitRef[];
  'us-gaap:DeferredForeignIncomeTaxExpenseBenefit': NumberWithUnitRef[];
  'us-gaap:ForeignIncomeTaxExpenseBenefitContinuingOperations': NumberWithUnitRef[];
  'us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesForeign': NumberWithUnitRef[];
  'us-gaap:EffectiveIncomeTaxRateReconciliationAtFederalStatutoryIncomeTaxRate': NumberWithUnitRef[];
  'us-gaap:IncomeTaxReconciliationIncomeTaxExpenseBenefitAtFederalStatutoryIncomeTaxRate': NumberWithUnitRef[];
  'us-gaap:IncomeTaxReconciliationStateAndLocalIncomeTaxes': NumberWithUnitRef[];
  'us-gaap:EffectiveIncomeTaxRateReconciliationTaxCutsAndJobsActOf2017Amount': NumberWithUnitRef[];
  'us-gaap:IncomeTaxReconciliationForeignIncomeTaxRateDifferential': NumberWithUnitRef[];
  'us-gaap:EffectiveIncomeTaxRateReconciliationFdiiAmount': NumberWithUnitRef[];
  'us-gaap:IncomeTaxReconciliationTaxCreditsResearch': NumberWithUnitRef[];
  'us-gaap:EffectiveIncomeTaxRateReconciliationShareBasedCompensationExcessTaxBenefitAmount': NumberWithUnitRef[];
  'us-gaap:IncomeTaxReconciliationOtherAdjustments': NumberWithUnitRef[];
  'us-gaap:EffectiveIncomeTaxRateContinuingOperations': NumberWithUnitRef[];
  'us-gaap:DeferredTaxAssetsGoodwillAndIntangibleAssets': NumberWithUnitRef[];
  'us-gaap:DeferredTaxAssetsTaxDeferredExpenseReservesAndAccruals': NumberWithUnitRef[];
  'us-gaap:DeferredTaxAssetsDeferredIncome': NumberWithUnitRef[];
  'us-gaap:DeferredTaxAssetsOtherComprehensiveLoss': NumberWithUnitRef[];
  'us-gaap:DeferredTaxAssetsTaxCreditCarryforwards': NumberWithUnitRef[];
  'us-gaap:DeferredTaxAssetsOther': NumberWithUnitRef[];
  'us-gaap:DeferredTaxAssetsGross': NumberWithUnitRef[];
  'us-gaap:DeferredTaxAssetsValuationAllowance': NumberWithUnitRef[];
  'us-gaap:DeferredTaxAssetsNet': NumberWithUnitRef[];
  'us-gaap:DeferredTaxLiabilitiesLeasingArrangements': NumberWithUnitRef[];
  'us-gaap:DeferredTaxLiabilitiesOtherComprehensiveIncome': NumberWithUnitRef[];
  'us-gaap:DeferredTaxLiabilitiesOther': NumberWithUnitRef[];
  'us-gaap:DeferredIncomeTaxLiabilities': NumberWithUnitRef[];
  'us-gaap:DeferredTaxAssetsLiabilitiesNet': NumberWithUnitRef[];
  'us-gaap:DeferredTaxAssetsTaxCreditCarryforwardsForeign': NumberWithUnitRef;
  'us-gaap:DeferredTaxAssetsTaxCreditCarryforwardsResearch': NumberWithUnitRef;
  'us-gaap:UnrecognizedTaxBenefits': NumberWithUnitRef[];
  'us-gaap:UnrecognizedTaxBenefitsThatWouldImpactEffectiveTaxRate': NumberWithUnitRef[];
  'us-gaap:UnrecognizedTaxBenefitsIncreasesResultingFromPriorPeriodTaxPositions': NumberWithUnitRef[];
  'us-gaap:UnrecognizedTaxBenefitsDecreasesResultingFromPriorPeriodTaxPositions': NumberWithUnitRef[];
  'us-gaap:UnrecognizedTaxBenefitsIncreasesResultingFromCurrentPeriodTaxPositions': NumberWithUnitRef[];
  'us-gaap:UnrecognizedTaxBenefitsDecreasesResultingFromSettlementsWithTaxingAuthorities': NumberWithUnitRef[];
  'us-gaap:UnrecognizedTaxBenefitsReductionsResultingFromLapseOfApplicableStatuteOfLimitations': NumberWithUnitRef[];
  'us-gaap:DecreaseInUnrecognizedTaxBenefitsIsReasonablyPossible': NumberWithUnitRef;
  'us-gaap:LossContingencyEstimateOfPossibleLoss': NumberWithUnitRef[];
  'us-gaap:OperatingLeaseCost': NumberWithUnitRef[];
  'us-gaap:VariableLeaseCost': NumberWithUnitRef[];
  'us-gaap:OperatingLeasePayments': NumberWithUnitRef[];
  'us-gaap:OperatingLeaseRightOfUseAsset': NumberWithUnitRef[];
  'us-gaap:FinanceLeaseRightOfUseAsset': NumberWithUnitRef[];
  'us-gaap:OperatingLeaseLiabilityCurrent': NumberWithUnitRef[];
  'us-gaap:OperatingLeaseLiabilityNoncurrent': NumberWithUnitRef[];
  'us-gaap:FinanceLeaseLiabilityCurrent': NumberWithUnitRef[];
  'us-gaap:FinanceLeaseLiabilityNoncurrent': NumberWithUnitRef[];
  'us-gaap:LesseeOperatingLeaseLiabilityPaymentsDueNextTwelveMonths': NumberWithUnitRef;
  'us-gaap:FinanceLeaseLiabilityPaymentsDueNextTwelveMonths': NumberWithUnitRef;
  'us-gaap:LesseeOperatingLeaseLiabilityPaymentsDueYearTwo': NumberWithUnitRef;
  'us-gaap:FinanceLeaseLiabilityPaymentsDueYearTwo': NumberWithUnitRef;
  'us-gaap:LesseeOperatingLeaseLiabilityPaymentsDueYearThree': NumberWithUnitRef;
  'us-gaap:FinanceLeaseLiabilityPaymentsDueYearThree': NumberWithUnitRef;
  'us-gaap:LesseeOperatingLeaseLiabilityPaymentsDueYearFour': NumberWithUnitRef;
  'us-gaap:FinanceLeaseLiabilityPaymentsDueYearFour': NumberWithUnitRef;
  'us-gaap:LesseeOperatingLeaseLiabilityPaymentsDueYearFive': NumberWithUnitRef;
  'us-gaap:FinanceLeaseLiabilityPaymentsDueYearFive': NumberWithUnitRef;
  'us-gaap:LesseeOperatingLeaseLiabilityPaymentsDueAfterYearFive': NumberWithUnitRef;
  'us-gaap:FinanceLeaseLiabilityPaymentsDueAfterYearFive': NumberWithUnitRef;
  'us-gaap:LesseeOperatingLeaseLiabilityPaymentsDue': NumberWithUnitRef;
  'us-gaap:FinanceLeaseLiabilityPaymentsDue': NumberWithUnitRef;
  'us-gaap:LesseeOperatingLeaseLiabilityUndiscountedExcessAmount': NumberWithUnitRef;
  'us-gaap:FinanceLeaseLiabilityUndiscountedExcessAmount': NumberWithUnitRef;
  'us-gaap:OperatingLeaseLiability': NumberWithUnitRef;
  'us-gaap:FinanceLeaseLiability': NumberWithUnitRef;
  'us-gaap:DebtInstrumentTerm': StringNode;
  'us-gaap:ShortTermDebtWeightedAverageInterestRate': NumberWithUnitRef[];
  'us-gaap:ProceedsFromRepaymentsOfShortTermDebtMaturingInThreeMonthsOrLess': NumberWithUnitRef[];
  'us-gaap:ProceedsFromShortTermDebtMaturingInMoreThanThreeMonths': NumberWithUnitRef[];
  'us-gaap:RepaymentsOfShortTermDebtMaturingInMoreThanThreeMonths': NumberWithUnitRef[];
  'us-gaap:ProceedsFromRepaymentsOfShortTermDebtMaturingInMoreThanThreeMonths': NumberWithUnitRef[];
  'us-gaap:RepaymentsOfOtherShortTermDebt': NumberWithUnitRef;
  'us-gaap:ProceedsFromOtherShortTermDebt': NumberWithUnitRef;
  'us-gaap:DebtInstrumentCarryingAmount': NumberWithUnitRef[];
  'us-gaap:DebtInstrumentInterestRateEffectivePercentage': NumberWithUnitRef[];
  'us-gaap:DebtInstrumentInterestRateStatedPercentage': NumberWithUnitRef[];
  'us-gaap:DebtInstrumentUnamortizedDiscountPremiumAndDebtIssuanceCostsNet': NumberWithUnitRef[];
  'us-gaap:InterestCostsIncurred': NumberWithUnitRef[];
  'us-gaap:LongTermDebtMaturitiesRepaymentsOfPrincipalInNextTwelveMonths': NumberWithUnitRef;
  'us-gaap:LongTermDebtMaturitiesRepaymentsOfPrincipalInYearTwo': NumberWithUnitRef;
  'us-gaap:LongTermDebtMaturitiesRepaymentsOfPrincipalInYearThree': NumberWithUnitRef;
  'us-gaap:LongTermDebtMaturitiesRepaymentsOfPrincipalInYearFour': NumberWithUnitRef;
  'us-gaap:LongTermDebtMaturitiesRepaymentsOfPrincipalInYearFive': NumberWithUnitRef;
  'us-gaap:LongTermDebtMaturitiesRepaymentsOfPrincipalAfterYearFive': NumberWithUnitRef;
  'us-gaap:LongTermDebtFairValue': NumberWithUnitRef[];
  'us-gaap:StockRepurchasedAndRetiredDuringPeriodShares': NumberWithUnitRef[];
  'us-gaap:ShareBasedCompensationArrangementByShareBasedPaymentAwardAwardVestingPeriod1': StringNode;
  'us-gaap:ShareBasedCompensationArrangementByShareBasedPaymentAwardNumberOfSharesAuthorized': NumberWithUnitRef[];
  'us-gaap:SharebasedCompensationArrangementBySharebasedPaymentAwardPurchasePriceOfCommonStockPercent': NumberWithUnitRef;
  'us-gaap:ShareBasedCompensationArrangementByShareBasedPaymentAwardMaximumEmployeeSubscriptionRate': NumberWithUnitRef;
  'us-gaap:DefinedContributionPlanEmployerMatchingContributionPercentOfMatch': NumberWithUnitRef[];
  'us-gaap:DefinedContributionPlanEmployerMatchingContributionPercent': NumberWithUnitRef;
  'us-gaap:ShareBasedCompensationArrangementByShareBasedPaymentAwardEquityInstrumentsOtherThanOptionsNonvestedNumber': NumberWithUnitRef[];
  'us-gaap:ShareBasedCompensationArrangementByShareBasedPaymentAwardEquityInstrumentsOtherThanOptionsNonvestedWeightedAverageGrantDateFairValue': NumberWithUnitRef[];
  'us-gaap:ShareBasedCompensationArrangementByShareBasedPaymentAwardEquityInstrumentsOtherThanOptionsGrantsInPeriod': NumberWithUnitRef[];
  'us-gaap:ShareBasedCompensationArrangementByShareBasedPaymentAwardEquityInstrumentsOtherThanOptionsGrantsInPeriodWeightedAverageGrantDateFairValue': NumberWithUnitRef[];
  'us-gaap:ShareBasedCompensationArrangementByShareBasedPaymentAwardEquityInstrumentsOtherThanOptionsVestedInPeriod': NumberWithUnitRef[];
  'us-gaap:ShareBasedCompensationArrangementByShareBasedPaymentAwardEquityInstrumentsOtherThanOptionsVestedInPeriodWeightedAverageGrantDateFairValue': NumberWithUnitRef[];
  'us-gaap:ShareBasedCompensationArrangementByShareBasedPaymentAwardEquityInstrumentsOtherThanOptionsForfeitedInPeriod': NumberWithUnitRef[];
  'us-gaap:ShareBasedCompensationArrangementByShareBasedPaymentAwardEquityInstrumentsOtherThanOptionsForfeituresWeightedAverageGrantDateFairValue': NumberWithUnitRef[];
  'us-gaap:SharebasedCompensationArrangementBySharebasedPaymentAwardEquityInstrumentsOtherThanOptionsAggregateIntrinsicValueNonvested': NumberWithUnitRef;
  'us-gaap:ShareBasedCompensationArrangementByShareBasedPaymentAwardEquityInstrumentsOtherThanOptionsVestedInPeriodTotalFairValue': NumberWithUnitRef[];
  'us-gaap:SharesPaidForTaxWithholdingForShareBasedCompensation': NumberWithUnitRef[];
  'us-gaap:AllocatedShareBasedCompensationExpense': NumberWithUnitRef[];
  'us-gaap:EmployeeServiceShareBasedCompensationTaxBenefitFromCompensationExpense': NumberWithUnitRef[];
  'us-gaap:EmployeeServiceShareBasedCompensationNonvestedAwardsTotalCompensationCostNotYetRecognized': NumberWithUnitRef;
  'us-gaap:EmployeeServiceShareBasedCompensationNonvestedAwardsTotalCompensationCostNotYetRecognizedPeriodForRecognition1': StringNode;
  'us-gaap:CommitmentsAndContingenciesDisclosureTextBlock': StringNode;
  'us-gaap:UnrecordedUnconditionalPurchaseObligationsDisclosureTextBlock': StringNode;
  'us-gaap:UnrecordedUnconditionalPurchaseObligationBalanceOnFirstAnniversary': NumberWithUnitRef;
  'us-gaap:UnrecordedUnconditionalPurchaseObligationBalanceOnSecondAnniversary': NumberWithUnitRef;
  'us-gaap:UnrecordedUnconditionalPurchaseObligationBalanceOnThirdAnniversary': NumberWithUnitRef;
  'us-gaap:UnrecordedUnconditionalPurchaseObligationBalanceOnFourthAnniversary': NumberWithUnitRef;
  'us-gaap:UnrecordedUnconditionalPurchaseObligationBalanceOnFifthAnniversary': NumberWithUnitRef;
  'us-gaap:UnrecordedUnconditionalPurchaseObligationDueAfterFiveYears': NumberWithUnitRef;
  'us-gaap:UnrecordedUnconditionalPurchaseObligationBalanceSheetAmount': NumberWithUnitRef;
  'us-gaap:OtherGeneralAndAdministrativeExpense': NumberWithUnitRef[];
  'us-gaap:NoncurrentAssets': NumberWithUnitRef[];
}

export interface GsdAddressOfAuditorPostCodeIdentifier {
  '#text': number;
  '@_contextRef': string;
  '@_xml:lang'?: string;
}

export interface BooleanWithRef {
  '#text': boolean;
  '@_contextRef': string;
  '@_xml:lang'?: string;
}

export interface GsdAddressOfReportingEntityStreetBuildingIdentifier {
  '#text': number | string;
  '@_contextRef': string;
  '@_xml:lang'?: string;
}

export interface XbrliContext {
  'xbrli:entity': XbrliEntity;
  'xbrli:period': XbrliPeriod;
  '@_id': string;
  'xbrli:scenario'?: XbrliScenario;
}

export interface XbrliEntity {
  'xbrli:identifier': Identifier;
}

export interface XbrliPeriod {
  'xbrli:startDate'?: string;
  'xbrli:endDate'?: string;
  'xbrli:instant'?: string;
}

export interface XbrliScenario {
  'xbrldi:typedMember'?: XbrliScenarioXbrldiTypedMember;
  'xbrldi:explicitMember'?: XbrldiExplicitMember;
}

export interface XbrliScenarioXbrldiTypedMember {
  'cmn:memberOfBoardIdentifier'?: number;
  '@_dimension': string;
  'cmn:auditorIdentifier'?: number | string;
  'mrv:keyFigureOrFinancialRatioIdentifier'?: number;
  'fsa:componentOfCashFlowsIdentifier'?: number;
}

export interface XbrliUnitElement {
  'xbrli:measure': string;
  '@_id': string;
}

export interface NodeWithNamespace {
  '#text': string;
  '@_xmlns': string;
}

export function isNodeWithNamespace(s: string | NodeWithNamespace): s is NodeWithNamespace {
  return typeof s !== 'string' && '#text' in s;
}

// https://stackoverflow.com/a/54520829/2021517
export type KeysMatching<T, V> = { [K in keyof T]-?: T[K] extends V ? K : never }[keyof T];