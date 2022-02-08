// Initially created by quicktype.
// - The names might not make sense.
// - Some of them are renamed manually.
// - Some extra types have been added based on taxonomies.

export interface XBRLDocument {
  '?xml': XML;
  'xbrli:xbrl'?: XbrliXbrl;
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
  'link:schemaRef': LinkSchemaRef;
  'xbrli:context': XbrliContext[];
  'xbrli:unit': XbrliUnitElement[] | XbrliUnitElement;
  'arr:AddresseeOfAuditorsReportOnExtendedReviewOfFinancialStatements'?: StringNode;
  'arr:DescriptionOfQualificationsOfFinancialStatementsExtendedReview'?: StringNode;
  'arr:InformationOnSignatureOfAuditors'?: StringNode;
  'arr:OpinionOnFinancialStatementsExtendedReview'?: StringNode;
  'arr:SignatureOfAuditorsDate'?: StringNode;
  'arr:SignatureOfAuditorsPlace'?: StringNode;
  'arr:StatementOfAuditorsResponsibilityExtendedReview'?: StringNode;
  'arr:StatementOfExecutiveAndSupervisoryBoardsResponsibilityForFinancialStatementsExtendedReview'?: StringNode;
  'cmn:IdentificationNumberCvrOfAuditFirm'?: DIdentificationNumberCvrOfAuditFirm[] | GsdAddressOfAuditorPostCodeIdentifier;
  'cmn:IdentificationNumberOfAuditor'?: StringNode[] | StringNode;
  'cmn:NameAndSurnameOfAuditor'?: StringNode[] | StringNode;
  'cmn:NameAndSurnameOfMemberOfExecutiveBoard': StringNode[] | StringNode;
  'cmn:NameAndSurnameOfMemberOfSupervisoryBoard'?: StringNode[];
  'cmn:NameOfAuditFirm'?: StringNode[] | StringNode;
  'cmn:TitleOfMemberOfSupervisoryBoard'?: StringNode;
  'cmn:TypeOfAuditorAssistance': StringNode;
  'fsa:AccountingPoliciesAreUnchangedFromPreviousPeriod': BooleanWithRef;
  'fsa:Assets': NumberWithUnitRef[];
  'fsa:AverageNumberOfEmployees'?: NumberWithUnitRef[];
  'fsa:CashAndCashEquivalents': NumberWithUnitRef[];
  'fsa:ClassOfReportingEntity': StringNode;
  'fsa:CompletedDevelopmentProjects'?: NumberWithUnitRef[];
  'fsa:ContributedCapital': NumberWithUnitRef[];
  'fsa:CurrentAssets': NumberWithUnitRef[];
  'fsa:DepositsLongtermInvestmentsAndReceivables'?: NumberWithUnitRef[];
  'fsa:DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss'?: NumberWithUnitRef[];
  'fsa:DisclosureOfAccountingPolicies'?: StringNode;
  'fsa:DisclosureOfContingentLiabilities'?: StringNode;
  'fsa:DisclosureOfEmployeeBenefitsExpense': StringNode;
  'fsa:DisclosureOfEquity'?: StringNode;
  'fsa:DisclosureOfMortgagesAndCollaterals'?: StringNode;
  'fsa:DisclosureOfPropertyPlantAndEquipment'?: StringNode;
  'fsa:DisclosureOfTaxExpenseOnOrdinaryActivities'?: StringNode;
  'fsa:DividendPaid'?: NumberWithUnitRef[];
  'fsa:DividendsFromTreasuryShares'?: NumberWithUnitRef[];
  'fsa:EmployeeBenefitsExpense': NumberWithUnitRef[];
  'fsa:Equity': NumberWithUnitRef[];
  'fsa:FixturesFittingsToolsAndEquipment'?: NumberWithUnitRef[];
  'fsa:GrossProfitLoss'?: NumberWithUnitRef[];
  'fsa:IncreaseDecreaseOfEquityThroughChangesInAccountingPolicies'?: NumberWithUnitRef[];
  'fsa:InformationOnChangesAndEffectsOfChangesOnRecognitionAndMeasurementBasisResultingFromChangesInAccountingEstimatesOrErrors'?: StringNode;
  'fsa:IntangibleAssets'?: NumberWithUnitRef[];
  'fsa:LeaseholdImprovements'?: NumberWithUnitRef[];
  'fsa:LiabilitiesAndEquity': NumberWithUnitRef[];
  'fsa:LiabilitiesOtherThanProvisions': NumberWithUnitRef[];
  'fsa:LongtermInvestmentsAndReceivables'?: NumberWithUnitRef[];
  'fsa:LongtermLiabilitiesOtherThanProvisions'?: NumberWithUnitRef[];
  'fsa:LongtermTaxPayables'?: NumberWithUnitRef[];
  'fsa:NoncurrentAssets'?: NumberWithUnitRef[];
  'fsa:OtherFinanceExpenses'?: NumberWithUnitRef[];
  'fsa:OtherFinanceIncome'?: NumberWithUnitRef[];
  'fsa:OtherOperatingExpenses'?: NumberWithUnitRef[];
  'fsa:OtherShorttermPayables'?: NumberWithUnitRef[];
  'fsa:ProfitLoss': NumberWithUnitRef[];
  'fsa:ProfitLossFromOrdinaryActivitiesBeforeTax': NumberWithUnitRef[];
  'fsa:ProfitLossFromOrdinaryOperatingActivities': NumberWithUnitRef[];
  'fsa:PropertyPlantAndEquipment'?: NumberWithUnitRef[];
  'fsa:ProposedDividendRecognisedInEquity'?: NumberWithUnitRef[];
  'fsa:Provisions'?: NumberWithUnitRef[];
  'fsa:ProvisionsForDeferredTax'?: NumberWithUnitRef[];
  'fsa:PurchaseOfTreasuryShares'?: NumberWithUnitRef[];
  'fsa:ReserveForDevelopmentExpenditure'?: NumberWithUnitRef[];
  'fsa:RetainedEarnings': NumberWithUnitRef[];
  'fsa:SelectedElementsFromReportingClassC'?: BooleanWithRef;
  'fsa:ShorttermDebtToBanks'?: NumberWithUnitRef[];
  'fsa:ShorttermDeferredIncome'?: NumberWithUnitRef[];
  'fsa:ShorttermLiabilitiesOtherThanProvisions': NumberWithUnitRef[];
  'fsa:ShorttermPrepaymentsReceivedFromCustomers'?: NumberWithUnitRef[];
  'fsa:ShorttermReceivables': NumberWithUnitRef[];
  'fsa:ShorttermTaxPayables'?: NumberWithUnitRef[];
  'fsa:ShorttermTaxReceivables'?: NumberWithUnitRef[];
  'fsa:ShorttermTradePayables': NumberWithUnitRef[];
  'fsa:TaxExpenseOnOrdinaryActivities'?: NumberWithUnitRef[];
  'fsa:TaxExpenseOnExtraordinaryEvents'?: NumberWithUnitRef[];
  'gsd:AddressOfSubmittingEnterprisePostcodeAndTown': StringNode;
  'gsd:AddressOfSubmittingEnterpriseStreetAndNumber': StringNode;
  'gsd:DateOfFoundationOfReportingEntity'?: StringNode;
  'gsd:DateOfGeneralMeeting': StringNode;
  'gsd:IdentificationNumberCvrOfReportingEntity': GsdAddressOfAuditorPostCodeIdentifier;
  'gsd:IdentificationNumberCvrOfSubmittingEnterprise': GsdAddressOfAuditorPostCodeIdentifier;
  'gsd:InformationOnTypeOfSubmittedReport': StringNode;
  'gsd:NameAndSurnameOfChairmanOfGeneralMeeting': StringNode;
  'gsd:NameOfReportingEntity': StringNode;
  'gsd:NameOfSubmittingEnterprise': StringNode;
  'gsd:PrecedingReportingPeriodStartDate': StringNode;
  'gsd:PredingReportingPeriodEndDate': StringNode;
  'gsd:ReportingPeriodEndDate': StringNode;
  'gsd:ReportingPeriodStartDate': StringNode;
  'mrv:DescriptionOfDevelopmentInActivitiesAndFinancialAffairs'?: StringNode;
  'mrv:DescriptionOfPrimaryActivitiesOfEntity'?: StringNode;
  'mrv:ManagementsReview'?: StringNode;
  'sob:ConfirmationThatAnnualReportIsPresentedInAccordanceWithRequirementsProvidedForByLegislationAnyStandardsAndRequirementsProvidedByArticlesOfAssociationOrByAgreement'?: StringNode;
  'sob:ConfirmationThatFinancialStatementGivesTrueAndFairViewOfAssetsLiabilitiesEquityFinancialPositionAndResults'?: StringNode;
  'sob:DateOfApprovalOfAnnualReport': StringNode;
  'sob:IdentificationOfApprovedAnnualReport'?: StringNode;
  'sob:ManagementsStatementAboutManagementsReview'?: StringNode;
  'sob:PlaceOfSignatureOfStatement'?: StringNode;
  'sob:RecommendationForApprovalOfAnnualReportByGeneralMeeting'?: StringNode;
  'sob:StatementByExecutiveAndSupervisoryBoards'?: StringNode;
  '@_xmlns:arr'?: string;
  '@_xmlns:cmn': string;
  '@_xmlns:dst'?: string;
  '@_xmlns:entry'?: string;
  '@_xmlns:esg'?: string;
  '@_xmlns:fsa': string;
  '@_xmlns:gsd': string;
  '@_xmlns:iso4217': string;
  '@_xmlns:ix'?: string;
  '@_xmlns:link': string;
  '@_xmlns:mrv': string;
  '@_xmlns:sob': string;
  '@_xmlns:tax'?: string;
  '@_xmlns:tch'?: string;
  '@_xmlns:xbrldi': string;
  '@_xmlns:xbrli': string;
  '@_xmlns:xlink': string;
  'fsa:Revenue'?: NumberWithUnitRef[];
  'fsa:ResultsFromNetFinancials'?: NumberWithUnitRef[];
  'fsa:InvestmentInPropertyPlantAndEquipment'?: NumberWithUnitRef[];
  'mrv:OperatingMargin'?: NumberWithUnitRef[];
  'mrv:ReturnOnCapitalEmployed'?: NumberWithUnitRef[];
  'mrv:EquityRatio'?: NumberWithUnitRef[];
  'mrv:ReturnOnEquity'?: NumberWithUnitRef[];
  'mrv:InformationOnCalculationOfKeyFiguresAndFinancialRatios'?: StringNode;
  'mrv:StatementOfTargetFiguresAndPoliciesForTheUnderrepresentedGender'?: StringNode;
  'mrv:StatementOfCorporateSocialResponsibility'?: StringNode;
  'mrv:LinkToStatementOfCorporateSocialResponsibility'?: StringNode;
  'gsd:AddressOfReportingEntityStreetName'?: StringNode;
  'gsd:AddressOfReportingEntityStreetBuildingIdentifier'?: GsdAddressOfReportingEntityStreetBuildingIdentifier;
  'gsd:AddressOfReportingEntityPostCodeIdentifier'?: GsdAddressOfAuditorPostCodeIdentifier;
  'gsd:AddressOfReportingEntityDistrictName'?: StringNode;
  'gsd:AddressOfReportingEntityCountry'?: StringNode;
  'gsd:TelephoneNumberOfReportingEntity'?: StringNode;
  'gsd:HomepageOfReportingEntity'?: StringNode;
  'arr:IndependentAuditorsReportsAudit'?: StringNode;
  'arr:AddresseeOfAuditorsReportOnAuditedFinancialStatements'?: StringNode;
  'arr:OpinionOnAuditedFinancialStatements'?: StringNode;
  'arr:DescriptionOfQualificationsOfAuditedFinancialStatements'?: StringNode;
  'arr:StatementOnManagementsReviewAuditorsReportOnAuditedFinancialStatements'?: StringNode;
  'arr:StatementOfExecutiveAndSupervisoryBoardsResponsibilityForFinancialStatements'?: StringNode;
  'arr:StatementOfAuditorsResponsibilityForAuditAndAuditPerformed'?: StringNode;
  'fsa:OtherOperatingIncome'?: NumberWithUnitRef[];
  'fsa:ExternalExpenses'?: NumberWithUnitRef[];
  'fsa:TaxExpense'?: NumberWithUnitRef[];
  'fsa:ProfitLossFromContinuingOperations'?: NumberWithUnitRef[];
  'fsa:StatementOfChangesInEquity'?: StringNode;
  'fsa:InformationOnOperatingSegmentsAndGeographicalMarkets'?: StringNode;
  'fsa:DisclosureOfOtherFinanceExpenses'?: StringNode;
  'fsa:DisclosureOfTaxExpenses'?: StringNode;
  'fsa:DisclosureOfIntangibleAssets'?: StringNode;
  'fsa:DisclosureOfInvestments'?: StringNode;
  'fsa:ExplanationOfPrepayments'?: StringNode;
  'fsa:InformationOnContractWorkInProgress'?: StringNode;
  'fsa:DisclosureOfOtherPayables'?: StringNode;
  'fsa:DisclosureOfDeferredIncome'?: StringNode;
  'fsa:InformationOnRemunerationOfManagementCategoriesAndSpecialIncentiveProgrammes'?: StringNode;
  'fsa:InformationOnAuditorsFees'?: StringNode;
  'fsa:DisclosureOfOtherArrangementsNotRecognisedInBalanceSheet'?: StringNode;
  'fsa:DisclosureOfRelatedParties'?: StringNode;
  'fsa:DisclosureOfScopeAndNatureOfDerivativeFinancialInstruments'?: StringNode;
  'fsa:DisclosureOfSignificantEventsOccurringAfterEndOfReportingPeriod'?: StringNode;
  'fsa:InformationOnReportingClassOfEntity'?: StringNode;
  'fsa:DescriptionOfGeneralMattersRelatedToRecognitionMeasurementAndChangesInAccountingPolicies'?: StringNode;
  'fsa:DescriptionOfMethodsOfTranslationOfForeignCurrencies'?: StringNode;
  'fsa:DescriptionOfAccountingPoliciesRelatedToDerivativeFinancialInstruments'?: StringNode;
  'fsa:InformationOnSegments'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfRevenue'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfExternalExpenses'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfEmployeeBenefitExpense'?: StringNode;
  'fsa:DescriptionOfMethodsOfImpairmentLossesAndDepreciation'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfOtherOperatingIncomeAndExpenses'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfFinanceIncomeAndExpenses'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfTaxExpenses'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfIntangibleAssets'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfPropertyPlantAndEquipment'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfLeaseholdImprovements'?: StringNode;
  'fsa:DescriptionOfMethodsOfAmortisationOfNoncurrentAssets'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfInventories'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfContractWorkInProgress'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfReceivables'?: StringNode;
  'fsa:DescriptionOfMethodsOfLeases'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfDeferredIncomeAssets'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfProvisions'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfTaxPayablesAndDeferredTax'?: StringNode;
  'fsa:DescriptionOfMethodsOfCurrentTaxReceivablesAndLiabilities'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfLiabilitiesOtherThanProvisions'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfDeferredIncomeLiabilities'?: StringNode;
  'fsa:ExplanationOfNotDisclosingCashFlowsStatements'?: StringNode;
  'gsd:ToolForPreparingTheXBRLInstanceDocument'?: StringNode;
  'mrv:NameOfKeyFigureOrFinancialRatio'?: StringNode[];
  'mrv:ValueOfKeyFigureOrFinancialRatioMonetary'?: NumberWithUnitRef[];
  'fsa:Goodwill'?: NumberWithUnitRef[];
  'fsa:LandAndBuildings'?: NumberWithUnitRef[];
  'fsa:OtherLongtermReceivables'?: NumberWithUnitRef[];
  'fsa:Inventories'?: NumberWithUnitRef[];
  'fsa:ContractWorkInProgress'?: NumberWithUnitRef[];
  'fsa:ShorttermTradeReceivables'?: NumberWithUnitRef[];
  'fsa:ShorttermReceivablesFromGroupEnterprises'?: NumberWithUnitRef[];
  'fsa:OtherShorttermReceivables'?: NumberWithUnitRef[];
  'fsa:DeferredIncomeAssets'?: NumberWithUnitRef[];
  'fsa:LongtermPayablesToGroupEnterprises'?: NumberWithUnitRef[];
  'fsa:LongtermDeferredIncome'?: NumberWithUnitRef[];
  'fsa:OtherLongtermPayables'?: NumberWithUnitRef[];
  'fsa:ShorttermPayablesToGroupEnterprises'?: NumberWithUnitRef[];
  'fsa:ShorttermContractWorkInProgressLiabilities'?: NumberWithUnitRef[];
  'mrv:ValueOfKeyFigureOrFinancialRatio'?: NumberWithUnitRef[];
  'cmn:TitleOfMemberOfExecutiveBoard'?: StringNode;
  'gsd:AddressOfAuditorStreetName'?: StringNode;
  'gsd:AddressOfAuditorStreetBuildingIdentifier'?: GsdAddressOfAuditorPostCodeIdentifier;
  'gsd:AddressOfAuditorPostCodeIdentifier'?: GsdAddressOfAuditorPostCodeIdentifier;
  'gsd:AddressOfAuditorDistrictName'?: StringNode;
  'cmn:DescriptionOfAuditor'?: StringNode[] | StringNode;
  '@_xmlns:xsi'?: string;
  '@_xmlns:xsd'?: string;
  '@_xmlns:gen'?: string;
  '@_xmlns:ref'?: string;
  '@_xmlns:xbrldt'?: string;
  '@_xmlns:nonnum'?: string;
  '@_xmlns:variable'?: string;
  '@_xmlns:eogs'?: string;
  '@_xmlns:xl'?: string;
  '@_xmlns:valm'?: string;
  '@_xmlns:num'?: string;
  '@_xmlns:msg'?: string;
  '@_xmlns:label'?: string;
  '@_xsi:schemaLocation'?: string;
  'sob:TheReportingEntityAppliesTheExceptionConcerningOptingOutOfTheStatementByManagementEtc'?: BooleanWithRef;
  'fsa:SelectedElementsFromReportingClassD'?: BooleanWithRef;
  'gsd:AddressOfReportingEntityCountryIdentificationCode'?: StringNode;
  'mrv:DescriptionOfSignificantEventsOccurringAfterEndOfReportingPeriod'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfGrossProfitLoss'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfCashAndCashEquivalents'?: StringNode;
  'fsa:DisclosureOfContributedCapital'?: StringNode;
  'fsa:DisclosureOfOwnership'?: StringNode;
  'fsa:RestOfOtherFinanceExpenses'?: NumberWithUnitRef[];
  'fsa:CurrentDeferredTaxAssets'?: NumberWithUnitRef[];
  'fsa:ShorttermPayablesToShareholdersAndManagement'?: NumberWithUnitRef[];
  '@_xml:lang'?: string;
  'arr:TypeOfBasisForModifiedOpinionOnAuditedFinancialStatements'?: StringNode;
  'arr:TypeOfModifiedOpinionOnAuditedFinancialStatements'?: StringNode;
  'gsd:RegisteredOfficeOfReportingEntity'?: StringNode;
  'mrv:DescriptionOfNetProfitRelationToExpectedDevelopmentAssumedInPreviousReport'?: StringNode;
  'mrv:DescriptionOfAnyUncertaintyConnectedWithRecognitionOrMeasurement'?: StringNode;
  'mrv:DescriptionOfExpectedDevelopment'?: StringNode;
  'fsa:IncomeFromInvestmentsInGroupEnterprises'?: NumberWithUnitRef[];
  'fsa:DevelopmentProjectsInProgress'?: NumberWithUnitRef[];
  'fsa:NoncurrentDeferredTaxAssets'?: NumberWithUnitRef[];
  'fsa:ManufacturedGoodsAndGoodsForResale'?: NumberWithUnitRef[];
  'fsa:PrepaymentsForGoods'?: NumberWithUnitRef[];
  'fsa:LongtermDebtToOtherCreditInstitutions'?: NumberWithUnitRef[];
  'fsa:OtherPayablesIncludingTaxPayablesLiabilitiesOtherThanProvisionsLongterm'?: NumberWithUnitRef[];
  'fsa:ShorttermPartOfLongtermLiabilitiesOtherThanProvisions'?: NumberWithUnitRef[];
  'fsa:OtherPayablesIncludingTaxPayablesLiabilitiesOtherThanProvisionsShortterm'?: NumberWithUnitRef[];
  'fsa:ContributionFromGroup'?: NumberWithUnitRef[];
  'fsa:EquityTransfersToReserves'?: NumberWithUnitRef[];
  'fsa:DisclosureOfAnyUncertaintyConnectedWithRecognitionOrMeasurement'?: StringNode;
  'fsa:DisclosureOfDepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss'?: StringNode;
  'fsa:DisclosureOfOtherFinanceIncome'?: StringNode;
  'fsa:DisclosureOfTheManagementsProposedDistributionOfProfitLoss'?: StringNode;
  'fsa:InformationOnSpecificPrerequisitesRegardingDevelopmentProjectsAndTaxAssets'?: StringNode;
  'fsa:DisclosureOfDeferredTaxAssetsAndLiabilities'?: StringNode;
  'fsa:DisclosureOfLongtermLiabilities'?: StringNode;
  'fsa:ExplanationOfShorttermLiability'?: StringNode[];
  'fsa:InformationOnRelatedEntities'?: StringNode;
  'fsa:InformationOnConsolidatedFinancialStatements'?: StringNode;
  'fsa:DescriptionOfMethodsOfForeignCurrencies'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfCostOfSales'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfIncomeAndExpensesFromInvestmentsInGroupEnterprisesAndAssociates'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfFinanceIncome'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfFinanceExpenses'?: StringNode;
  'fsa:DescriptionOfMethodsOfPrepayments'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfIncomeStatementItems'?: StringNode;
  'fsa:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfAssetsAndLiabilities'?: StringNode;
  'fsa:DescriptionMethodsOfRecognitionAndMeasurementBasisForCashFlowsStatement'?: StringNode;
  'fsa:DescriptionOfMethodsOfStatingKeyFiguresAndFinancialRatiosIncludedInManagementReview'?: StringNode;
  'fsa:GrossResult'?: NumberWithUnitRef[];
  'mrv:GrossMargin'?: NumberWithUnitRef[];
  'fsa:CostOfSales'?: NumberWithUnitRef[];
  'fsa:OtherExternalExpenses'?: NumberWithUnitRef[];
  'fsa:PropertyPlantAndEquipmentInProgress'?: NumberWithUnitRef[];
  'fsa:OtherProvisions'?: NumberWithUnitRef[];
  'fsa:Dividend'?: NumberWithUnitRef[];
  'fsa:Adjustments'?: NumberWithUnitRef[];
  'fsa:AdjustmentsForDecreaseIncreaseInWorkingCapital'?: NumberWithUnitRef[];
  'fsa:CashFlowFromOperatingActivitiesBeforeFinancialItems'?: NumberWithUnitRef[];
  'fsa:InterestReceivedClassifiedAsOperatingActivities'?: NumberWithUnitRef[];
  'fsa:InterestPaidClassifiedAsOperatingActivities'?: NumberWithUnitRef[];
  'fsa:CashFlowFromOrdinaryOperatingActivities'?: NumberWithUnitRef[];
  'fsa:IncomeTaxesPaidRefundClassifiedAsOperatingActivities'?: NumberWithUnitRef[];
  'fsa:CashFlowsFromUsedInOperatingActivities'?: NumberWithUnitRef[];
  'fsa:PurchaseOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities'?: NumberWithUnitRef[];
  'fsa:ProceedsFromSalesOfPropertyPlantAndEquipmentClassifiedAsInvestingActivities'?: NumberWithUnitRef[];
  'fsa:CashFlowsFromUsedInInvestingActivities'?: NumberWithUnitRef[];
  'fsa:DividendPaidCashFlow'?: NumberWithUnitRef[];
  'fsa:NameOfComponentOfCashFlowsFromUsedInFinancingActivities'?: StringNode[];
  'fsa:AmountOfComponentOfCashFlowsFromUsedInFinancingActivities'?: NumberWithUnitRef[];
  'fsa:CashFlowsFromUsedInFinancingActivities'?: NumberWithUnitRef[];
  'fsa:NetIncreaseDecreaseInCashAndCashEquivalents'?: NumberWithUnitRef[];
  'fsa:CashAndCashEquivalentsConcerningCashflowStatement'?: NumberWithUnitRef[];
  'fsa:ShorttermDebtToBanksCashFlowsStatement'?: NumberWithUnitRef[];
  'fsa:DisclosureOfRevenue'?: StringNode;
  'fsa:NumberOfEmployees'?: NumberWithUnitRef[];
  'fsa:InformationOnOtherReceivables'?: StringNode;
  'fsa:DisclosureOfProvisionsForDeferredTax'?: StringNode;
  'fsa:DisclosureOfOtherProvisions'?: StringNode;
  'fsa:OtherDisclosures'?: StringNode;
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
