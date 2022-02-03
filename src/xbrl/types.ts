// Created by quicktype. The names might not make sense. Some of them are renamed manually.
// Some extra types have been added based on taxonomies.

export interface XBRLDocument {
  '?xml': XML;
  'xbrli:xbrl'?: XbrliXbrl;
  xbrl?: Xbrl;
  '?instance-generator'?: InstanceGenerator;
}

export interface InstanceGenerator {
  '@_id': string;
  '@_version': string;
  '@_creationdate': string;
}

export interface XML {
  '@_version': string;
  '@_encoding': string;
}

export interface Xbrl {
  'link:schemaRef': LinkSchemaRef;
  'c:IdentificationOfApprovedAnnualReport': StringNode;
  'c:ConfirmationThatAnnualReportIsPresentedInAccordanceWithRequirementsProvidedForByLegislationAnyStandardsAndRequirementsProvidedByArticlesOfAssociationOrByAgreement': StringNode;
  'c:ConfirmationThatFinancialStatementGivesTrueAndFairViewOfAssetsLiabilitiesEquityFinancialPositionAndResults': StringNode;
  'c:ManagementsStatementAboutManagementsReview': StringNode;
  'c:RecommendationForApprovalOfAnnualReportByGeneralMeeting': StringNode;
  'd:NameAndSurnameOfMemberOfExecutiveBoard': StringNode[] | StringNode;
  'e:AddresseeOfAuditorsReportOnExtendedReviewOfFinancialStatements'?: StringNode;
  'e:OpinionOnFinancialStatementsExtendedReview'?: StringNode;
  'e:DescriptionOfQualificationsOfFinancialStatementsExtendedReview'?: StringNode;
  'e:StatementOfExecutiveAndSupervisoryBoardsResponsibilityForFinancialStatementsExtendedReview'?: StringNode;
  'e:StatementOfAuditorsResponsibilityExtendedReview'?: StringNode;
  'e:StatementOnManagementsReviewAuditorsReportOnExtendedReviewFinancialStatementsExtendedReview'?: StringNode;
  'e:SignatureOfAuditorsPlace'?: StringNode;
  'e:SignatureOfAuditorsDate'?: StringNode;
  'd:NameOfAuditFirm'?: StringNode[];
  'd:NameAndSurnameOfAuditor'?: StringNode[];
  'd:DescriptionOfAuditor'?: StringNode[];
  'd:IdentificationNumberOfAuditor'?: StringNode;
  'f:DescriptionOfPrimaryActivitiesOfEntity'?: StringNode;
  'f:DescriptionOfBranchesAbroad'?: StringNode;
  'g:GrossProfitLoss'?: NumberWithUnitRef[];
  'g:EmployeeBenefitsExpense'?: NumberWithUnitRef[];
  'g:DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss'?: NumberWithUnitRef[];
  'g:OtherOperatingExpenses'?: NumberWithUnitRef[];
  'g:ProfitLossFromOrdinaryOperatingActivities'?: NumberWithUnitRef[];
  'g:IncomeFromInvestmentsInGroupEnterprises'?: NumberWithUnitRef[];
  'g:OtherFinanceIncome'?: NumberWithUnitRef[];
  'g:OtherFinanceExpenses'?: NumberWithUnitRef[];
  'g:ProfitLossFromOrdinaryActivitiesBeforeTax'?: NumberWithUnitRef[];
  'g:TaxExpense'?: NumberWithUnitRef[];
  'g:ProfitLoss'?: NumberWithUnitRef[];
  'g:CompletedDevelopmentProjects'?: NumberWithUnitRef[];
  'g:Goodwill'?: NumberWithUnitRef[];
  'g:IntangibleAssets'?: NumberWithUnitRef[];
  'g:FixturesFittingsToolsAndEquipment'?: NumberWithUnitRef[];
  'g:LeaseholdImprovements'?: NumberWithUnitRef[];
  'g:PropertyPlantAndEquipment'?: NumberWithUnitRef[];
  'g:NoncurrentAssets'?: NumberWithUnitRef[];
  'g:ManufacturedGoodsAndGoodsForResale'?: NumberWithUnitRef[];
  'g:Inventories'?: NumberWithUnitRef[];
  'g:ShorttermTradeReceivables'?: NumberWithUnitRef[];
  'g:OtherShorttermReceivables'?: NumberWithUnitRef[];
  'g:ShorttermTaxReceivables'?: NumberWithUnitRef[];
  'g:DeferredIncomeAssets'?: NumberWithUnitRef[];
  'g:ShorttermReceivables'?: NumberWithUnitRef[];
  'g:CashAndCashEquivalents'?: NumberWithUnitRef[];
  'g:CurrentAssets'?: NumberWithUnitRef[];
  'g:Assets'?: NumberWithUnitRef[];
  'g:ContributedCapital'?: NumberWithUnitRef[];
  'g:ReserveForDevelopmentExpenditure'?: NumberWithUnitRef[];
  'g:RetainedEarnings'?: NumberWithUnitRef[];
  'g:Equity'?: NumberWithUnitRef[];
  'g:ProvisionsForDeferredTax'?: NumberWithUnitRef[];
  'g:Provisions'?: NumberWithUnitRef[];
  'g:ShorttermPrepaymentsReceivedFromCustomers'?: NumberWithUnitRef[];
  'g:ShorttermTradePayables'?: NumberWithUnitRef[];
  'g:ShorttermPayablesToShareholdersAndManagement'?: NumberWithUnitRef[];
  'g:ShorttermTaxPayables'?: NumberWithUnitRef[];
  'g:OtherShorttermPayables'?: NumberWithUnitRef[];
  'g:ShorttermLiabilitiesOtherThanProvisions'?: NumberWithUnitRef[];
  'g:LiabilitiesOtherThanProvisions'?: NumberWithUnitRef[];
  'g:LiabilitiesAndEquity'?: NumberWithUnitRef[];
  'g:EquityTransfersToReserves'?: NumberWithUnitRef[];
  'g:InformationOnReportingClassOfEntity'?: StringNode;
  'g:DescriptionOfGeneralMattersRelatedToRecognitionMeasurementAndChangesInAccountingPolicies'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfGrossProfitLoss'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfRevenue'?: StringNode;
  'g:DescriptionOfRawMaterialsAndConsumablesUsed'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfOtherOperatingExpenses'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfExternalExpenses'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfEmployeeBenefitExpense'?: StringNode;
  'g:DescriptionOfMethodsOfImpairmentLossesAndDepreciation'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfFinanceIncomeAndExpenses'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfTaxExpenses'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfIntangibleAssets'?: StringNode;
  'g:ExplanationOfAmortizationPeriodForGoodwill'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfPropertyPlantAndEquipment'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisForInvestmentsInSubsidiariesAndAssociates'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfInventories'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfReceivables'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfContractWorkInProgress'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfDeferredIncomeAssets'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfCashAndCashEquivalents'?: StringNode;
  'g:DescriptionOfMethodsOfDividends'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfTaxPayablesAndDeferredTax'?: StringNode;
  'g:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfLiabilitiesOtherThanProvisions'?: StringNode;
  'g:DescriptionOfMethodsOfForeignCurrencies'?: StringNode;
  'g:WagesAndSalaries'?: NumberWithUnitRef[];
  'g:PostemploymentBenefitExpense'?: NumberWithUnitRef[];
  'g:SocialSecurityContributions'?: NumberWithUnitRef[];
  'g:EmployeeExpensesTransferredToAssets'?: NumberWithUnitRef[];
  'g:AverageNumberOfEmployees'?: NumberWithUnitRef[];
  'g:AmortisationOfIntangibleAssets'?: NumberWithUnitRef[];
  'g:DepreciationOfPropertyPlantAndEquipment'?: NumberWithUnitRef[];
  'g:OtherInterestIncome'?: NumberWithUnitRef[];
  'g:InterestExpenseToParticipatingInterests'?: NumberWithUnitRef[];
  'g:OtherInterestExpenses'?: NumberWithUnitRef[];
  'g:IntangibleAssetsGross'?: NumberWithUnitRef[];
  'g:AccumulatedImpairmentLossesAndAmortisationOfIntangibleAssets'?: NumberWithUnitRef[];
  'g:fInformationOnSpecificPrerequisitesRegardingDevelopmentProjects'?: StringNode;
  'g:PropertyPlantAndEquipmentGross'?: NumberWithUnitRef[];
  'g:AdditionsToPropertyPlantAndEquipment'?: NumberWithUnitRef[];
  'g:DisposalsOfPropertyPlantAndEquipment'?: NumberWithUnitRef[];
  'g:AccumulatedRevaluationOfPropertyPlantAndEquipment'?: NumberWithUnitRef[];
  'g:AccumulatedImpairmentLossesAndDepreciationOfPropertyPlantAndEquipment'?: NumberWithUnitRef[];
  'g:InvestmentsGross'?: NumberWithUnitRef[];
  'g:AccumulatedRevaluationsOfInvestments'?: NumberWithUnitRef[];
  'g:ProfitLossRelatedToInvestments'?: NumberWithUnitRef[];
  'g:LongtermInvestmentsAndReceivables'?: NumberWithUnitRef[];
  'g:RelatedEntityName'?: StringNode;
  'g:RelatedEntityRegisteredOffice'?: StringNode;
  'g:ShareHeldByEntityOrConsolidatedEnterprisesInRelatedEntity'?: NumberWithUnitRef;
  'g:DisclosureOfContingentLiabilities'?: StringNode;
  'g:DisclosureOfMortgagesAndCollaterals'?: StringNode;
  'h:InformationOnTypeOfSubmittedReport'?: StringNode;
  'h:IdentificationNumberCvrOfSubmittingEnterprise'?: DIdentificationNumberCvrOfAuditFirm;
  'h:NameOfSubmittingEnterprise'?: StringNode;
  'h:AddressOfSubmittingEnterpriseStreetAndNumber'?: StringNode;
  'h:AddressOfSubmittingEnterprisePostcodeAndTown'?: StringNode;
  'h:ReportingPeriodStartDate'?: StringNode;
  'h:ReportingPeriodEndDate'?: StringNode;
  'h:PrecedingReportingPeriodStartDate'?: StringNode;
  'h:PredingReportingPeriodEndDate'?: StringNode;
  'h:IdentificationNumberCvrOfReportingEntity'?: DIdentificationNumberCvrOfAuditFirm;
  'h:NameOfReportingEntity'?: StringNode;
  'h:AddressOfReportingEntityStreetName'?: StringNode;
  'h:AddressOfReportingEntityStreetBuildingIdentifier'?: DIdentificationNumberCvrOfAuditFirm;
  'h:AddressOfReportingEntityPostCodeIdentifier'?: DIdentificationNumberCvrOfAuditFirm;
  'h:AddressOfReportingEntityDistrictName'?: StringNode;
  'h:AddressOfReportingEntityCountryIdentificationCode'?: StringNode;
  'h:AddressOfReportingEntityCountry'?: StringNode;
  'h:DateOfFoundationOfReportingEntity'?: StringNode;
  'h:RegisteredOfficeOfReportingEntity'?: StringNode;
  'h:NameOfFinancialInstitution'?: StringNode;
  'd:IdentificationNumberCvrOfAuditFirm'?: DIdentificationNumberCvrOfAuditFirm;
  'h:AddressOfAuditorStreetName'?: StringNode;
  'h:AddressOfAuditorStreetBuildingIdentifier'?: DIdentificationNumberCvrOfAuditFirm;
  'h:AddressOfAuditorPostCodeIdentifier'?: DIdentificationNumberCvrOfAuditFirm;
  'h:AddressOfAuditorDistrictName'?: StringNode;
  'h:AddressOfAuditorCountryIdentificationCode'?: StringNode;
  'h:AddressOfAuditorCountry'?: StringNode;
  'h:DateOfGeneralMeeting'?: StringNode;
  'h:NameAndSurnameOfChairmanOfGeneralMeeting'?: StringNode;
  'g:ClassOfReportingEntity'?: StringNode;
  'g:SelectedElementsFromReportingClassC'?: EReportingResponsibilitiesAccordingToTheDanishExecutiveOrderOnApprovedAuditorsReportsEspeciallyLegislationOnFinancialReportingIncludingAccountingAndStorageOfAccountingRecordsExtendedReview;
  'd:TypeOfAuditorAssistance': StringNode;
  'h:ToolForPreparingTheXBRLInstanceDocument'?: StringNode;
  'e:ReportingResponsibilitiesAccordingToTheDanishExecutiveOrderOnApprovedAuditorsReportsEspeciallyTheCriminalCodeAndFiscalTaxAndSubsidyLegislationExtendedReview'?: EReportingResponsibilitiesAccordingToTheDanishExecutiveOrderOnApprovedAuditorsReportsEspeciallyLegislationOnFinancialReportingIncludingAccountingAndStorageOfAccountingRecordsExtendedReview;
  'e:ReportingResponsibilitiesAccordingToTheDanishExecutiveOrderOnApprovedAuditorsReportsEspeciallyTheCompaniesActOrEquivalentLegislationThatTheCompanyIsSubjectToExtendedReview'?: EReportingResponsibilitiesAccordingToTheDanishExecutiveOrderOnApprovedAuditorsReportsEspeciallyLegislationOnFinancialReportingIncludingAccountingAndStorageOfAccountingRecordsExtendedReview;
  'e:ReportingResponsibilitiesAccordingToTheDanishExecutiveOrderOnApprovedAuditorsReportsEspeciallyLegislationOnFinancialReportingIncludingAccountingAndStorageOfAccountingRecordsExtendedReview'?: EReportingResponsibilitiesAccordingToTheDanishExecutiveOrderOnApprovedAuditorsReportsEspeciallyLegislationOnFinancialReportingIncludingAccountingAndStorageOfAccountingRecordsExtendedReview;
  'e:ReportingResponsibilitiesAccordingToTheDanishExecutiveOrderOnApprovedAuditorsReportsEspeciallyOtherMattersExtendedReview'?: EReportingResponsibilitiesAccordingToTheDanishExecutiveOrderOnApprovedAuditorsReportsEspeciallyLegislationOnFinancialReportingIncludingAccountingAndStorageOfAccountingRecordsExtendedReview;
  context: Context[];
  unit: Unit[];
  '@_xmlns': string;
  '@_xmlns:c': string;
  '@_xmlns:b': string;
  '@_xmlns:f': string;
  '@_xmlns:e': string;
  '@_xmlns:d': string;
  '@_xmlns:h'?: string;
  '@_xmlns:g': string;
  '@_xmlns:xlink': string;
  '@_xmlns:xbrli': string;
  '@_xmlns:iso4217': string;
  '@_xmlns:xbrldi': string;
  '@_xmlns:link': string;
  '@_xmlns:xsi': string;
  '@_xsi:schemaLocation': string;
  'c:ConfirmationThatFinancialStatementsAreExemptedFromAuditing'?: StringNode;
  'd:TitleOfMemberOfExecutiveBoard'?: StringNode;
  'e:DescriptionOfPrimaryActivitiesOfEntity'?: StringNode;
  'e:DescriptionOfDevelopmentInActivitiesAndFinancialAffairs'?: StringNode;
  'f:GrossProfitLoss'?: NumberWithUnitRef[];
  'f:IncomeFromInvestmentsInGroupEnterprises'?: NumberWithUnitRef[];
  'f:OtherFinanceIncome'?: NumberWithUnitRef[];
  'f:OtherFinanceExpenses'?: NumberWithUnitRef[];
  'f:ProfitLossFromOrdinaryActivitiesBeforeTax'?: NumberWithUnitRef[];
  'f:TaxExpense'?: NumberWithUnitRef[];
  'f:ProfitLoss'?: NumberWithUnitRef[];
  'f:LongtermInvestmentsInGroupEnterprises'?: NumberWithUnitRef[];
  'f:LongtermInvestmentsAndReceivables'?: NumberWithUnitRef[];
  'f:NoncurrentAssets'?: NumberWithUnitRef[];
  'f:ShorttermReceivablesFromAssociates'?: NumberWithUnitRef[];
  'f:ShorttermReceivablesFromOwnersAndManagement'?: NumberWithUnitRef[];
  'f:ShorttermReceivables'?: NumberWithUnitRef[];
  'f:CashAndCashEquivalents'?: NumberWithUnitRef[];
  'f:CurrentAssets'?: NumberWithUnitRef[];
  'f:Assets'?: NumberWithUnitRef[];
  'f:ContributedCapital'?: NumberWithUnitRef[];
  'f:ReserveForEntrepreneurialCompany'?: NumberWithUnitRef[];
  'f:RetainedEarnings'?: NumberWithUnitRef[];
  'f:Equity'?: NumberWithUnitRef[];
  'f:ShorttermPayablesToGroupEnterprises'?: NumberWithUnitRef[];
  'f:ShorttermLiabilitiesOtherThanProvisions'?: NumberWithUnitRef[];
  'f:LiabilitiesOtherThanProvisions'?: NumberWithUnitRef[];
  'f:LiabilitiesAndEquity'?: NumberWithUnitRef[];
  'f:InvestmentsGross'?: NumberWithUnitRef[];
  'f:AccumulatedRevaluationsOfInvestments'?: NumberWithUnitRef[];
  'f:ProfitLossRelatedToInvestments'?: NumberWithUnitRef[];
  'f:DisclosureOfInvestments'?: StringNode;
  'f:RelatedEntityName'?: StringNode;
  'f:RelatedEntityRegisteredOffice'?: StringNode;
  'f:ShareHeldByEntityOrConsolidatedEnterprisesInRelatedEntity'?: NumberWithUnitRef;
  'f:InterestRateRelatedToOutstandingDebtFromManagementCategory'?: NumberWithUnitRef[];
  'g:InformationOnTypeOfSubmittedReport'?: StringNode;
  'g:IdentificationNumberCvrOfSubmittingEnterprise'?: DIdentificationNumberCvrOfAuditFirm;
  'g:NameOfSubmittingEnterprise'?: StringNode;
  'g:AddressOfSubmittingEnterpriseStreetAndNumber'?: StringNode;
  'g:AddressOfSubmittingEnterprisePostcodeAndTown'?: StringNode;
  'g:ReportingPeriodStartDate'?: StringNode;
  'g:ReportingPeriodEndDate'?: StringNode;
  'g:PrecedingReportingPeriodStartDate'?: StringNode;
  'g:PredingReportingPeriodEndDate'?: StringNode;
  'g:IdentificationNumberCvrOfReportingEntity'?: DIdentificationNumberCvrOfAuditFirm;
  'g:NameOfReportingEntity'?: StringNode;
  'g:AddressOfReportingEntityStreetName'?: StringNode;
  'g:AddressOfReportingEntityStreetBuildingIdentifier'?: DIdentificationNumberCvrOfAuditFirm;
  'g:AddressOfReportingEntityPostCodeIdentifier'?: DIdentificationNumberCvrOfAuditFirm;
  'g:AddressOfReportingEntityDistrictName'?: StringNode;
  'g:AddressOfReportingEntityCountryIdentificationCode'?: StringNode;
  'g:AddressOfReportingEntityCountry'?: StringNode;
  'g:RegisteredOfficeOfReportingEntity'?: StringNode;
  'g:DateOfGeneralMeeting'?: StringNode;
  'g:NameAndSurnameOfChairmanOfGeneralMeeting'?: StringNode;
  'f:ClassOfReportingEntity'?: StringNode;
  'f:SelectedElementsFromReportingClassC'?: EReportingResponsibilitiesAccordingToTheDanishExecutiveOrderOnApprovedAuditorsReportsEspeciallyLegislationOnFinancialReportingIncludingAccountingAndStorageOfAccountingRecordsExtendedReview;
  'f:InformationOnReportingClassOfEntity'?: StringNode;
  'f:DescriptionOfGeneralMattersRelatedToRecognitionMeasurementAndChangesInAccountingPolicies'?: StringNode;
  'f:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfFinanceIncomeAndExpenses'?: StringNode;
  'f:DescriptionOfMethodsOfRecognitionAndMeasurementBasisForInvestmentsInSubsidiariesAndAssociates'?: StringNode;
  'f:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfReceivables'?: StringNode;
  'f:DescriptionOfMethodsOfDividends'?: StringNode;
  'f:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfTaxPayablesAndDeferredTax'?: StringNode;
  'f:DescriptionOfMethodsOfRecognitionAndMeasurementBasisOfLiabilitiesOtherThanProvisions'?: StringNode;
}

export interface StringNode {
  '#text': string;
  '@_contextRef': string;
  '@_xml:lang'?: string;
}

export interface Context {
  entity: Entity;
  period: Period;
  '@_id': string;
  scenario?: Scenario;
}

export interface Entity {
  identifier: Identifier;
}

export interface Identifier {
  '#text': number;
  '@_scheme': string;
}

export interface Period {
  startDate?: string;
  endDate?: string;
  instant?: string;
}

export interface Scenario {
  'xbrldi:typedMember'?: ScenarioXbrldiTypedMember;
  'xbrldi:explicitMember'?: XbrldiExplicitMember;
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

export interface EReportingResponsibilitiesAccordingToTheDanishExecutiveOrderOnApprovedAuditorsReportsEspeciallyLegislationOnFinancialReportingIncludingAccountingAndStorageOfAccountingRecordsExtendedReview {
  '#text': boolean;
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
  'fsa:AccountingPoliciesAreUnchangedFromPreviousPeriod': Fsa;
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
  'fsa:SelectedElementsFromReportingClassC'?: Fsa;
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
  'sob:TheReportingEntityAppliesTheExceptionConcerningOptingOutOfTheStatementByManagementEtc'?: EReportingResponsibilitiesAccordingToTheDanishExecutiveOrderOnApprovedAuditorsReportsEspeciallyLegislationOnFinancialReportingIncludingAccountingAndStorageOfAccountingRecordsExtendedReview;
  'fsa:SelectedElementsFromReportingClassD'?: EReportingResponsibilitiesAccordingToTheDanishExecutiveOrderOnApprovedAuditorsReportsEspeciallyLegislationOnFinancialReportingIncludingAccountingAndStorageOfAccountingRecordsExtendedReview;
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

export interface Fsa {
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
