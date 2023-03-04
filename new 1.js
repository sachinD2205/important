// Validations



// String
atitleMr: yup.string().required(<FormattedLabel id="selectTitle" />),


// Mobile Number

 amobileNo: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enteraadhaarNo" />)
    .min(10, 'Mobile Number must be at least 10 number')
    .max(10, 'Mobile Number not valid on above 10 number')
    .required(),
	
	
// EMail
 aemail: yup
    .string()
    .email('Incorrect format')
    .required(<FormattedLabel id="enterEmailAddress" />),


//  Pincode
apincode: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enterPinCode" />)
    .min(6, 'Pincode Number must be at least 6 number')
    .max(6, 'Pincode Number not valid on above 6 number')
    .required(),
	
// Aadhar
 paadharNo: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enteraadhaarNo" />)
    .min(12, 'Adhar Number must be at least 12 number')
    .max(12, 'Adhar Number not valid on above 12 number')
    .required(),
	


// AGE 
witnessAge: yup
    .number()
    .typeError()
    .min(18, 'Age must be at least 18 year')
    .max(99, 'Age not valid on above 18 year')
    .required(<FormattedLabel id="enterAge" />),
	
	

// DOB
 witnessDob: yup
    .date()
    .typeError(<FormattedLabel id="selectDate" />)
    .required(),
	
	
	
// Check Box 
 witnessAddressC: yup
    .string()
    .required(<FormattedLabel id="witnessAddressC" />),
	
	



	
















import * as yup from 'yup'
import FormattedLabel from '../../../containers/reuseableComponents/FormattedLabel'

export let applicationDetailsSchema = yup.object().shape({
  zoneKey: yup.string().required(<FormattedLabel id="selectZone" />),
  wardKey: yup.string().required(<FormattedLabel id="selectWard" />),
  atitle: yup.string().required(<FormattedLabel id="selectTitle" />),
  atitleMr: yup.string().required(<FormattedLabel id="selectTitle" />),
  afName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterFName" />),
  amName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterMName" />),
  alName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterLName" />),
  afNameMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="enterFNameMr" />),
  amNameMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="enterMNameMr" />),
  alNameMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="enterLNameMr" />),
  aemail: yup
    .string()
    .email('Incorrect format')
    .required(<FormattedLabel id="enterEmailAddress" />),
  amobileNo: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enteraadhaarNo" />)
    .min(10, 'Mobile Number must be at least 10 number')
    .max(10, 'Mobile Number not valid on above 10 number')
    .required(),
  aflatBuildingNo: yup.string().required(<FormattedLabel id="enterFlat" />),
  abuildingName: yup.string().required(<FormattedLabel id="enterApartment" />),
  aroadName: yup.string().required(<FormattedLabel id="enterRoadName" />),
  alandmark: yup.string().required(<FormattedLabel id="enterLandmark" />),
  aflatBuildingNoMr: yup.string().required(<FormattedLabel id="enterFlatMr" />),
  abuildingNameMr: yup
    .string()
    .required(<FormattedLabel id="enterApartmentMr" />),
  aroadNameMr: yup.string().required(<FormattedLabel id="enterRoadNameMr" />),
  alandmarkMr: yup.string().required(<FormattedLabel id="enterLandmarkMr" />),
  acityName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterCity" />),
  astate: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="state" />),
  acityNameMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="enterCityMr" />),
  astateMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="stateMr" />),
  apincode: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enterPinCode" />)
    .min(6, 'Pincode Number must be at least 6 number')
    .max(6, 'Pincode Number not valid on above 6 number')
    .required(),
  marriageDate: yup
    .date()
    .typeError(<FormattedLabel id="selectDate" />)
    .required(),
  pplaceOfMarriage: yup
    .string()
    // .matches(
    //   /^[aA-zZ\s]+$/,
    //   'Must be only english characters / फक्त इंग्लिश शब्द ',
    // )
    .required(<FormattedLabel id="placeMarriage" />),
  pplaceOfMarriageMr: yup
    .string()
    // .matches(
    //   /^[\u0900-\u097F]+/,
    //   'Must be only marathi characters/ फक्त मराठी शब्द',
    // )

    .required(<FormattedLabel id="placeMarriageMr" />),
})

export let groomSchema = yup.object().shape({
  gtitle: yup.string().required(<FormattedLabel id="selectTitle" />),
  gfName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterFName" />),
  gmName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterMName" />),
  glName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterLName" />),
  gtitleMar: yup.string().required(<FormattedLabel id="selectTitle" />),
  gfNameMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="enterFNameMr" />),
  gmNameMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="enterMNameMr" />),
  glNameMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="enterLNameMr" />),
  gbirthDate: yup
    .date()
    .typeError(<FormattedLabel id="selectDate" />)
    .required(),
  gage: yup
    .number()
    .typeError()
    .min(18, 'Age must be at least 18 year')
    .max(99, 'Age not valid on above 18 year')
    .required(<FormattedLabel id="enterAge" />),
  ggender: yup.string().required(<FormattedLabel id="selectGender" />),
  gaadharNo: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enteraadhaarNo" />)
    .min(12, 'Adhar Number must be at least 12 number')
    .max(12, 'Adhar Number not valid on above 12 number')
    .required(),
  gemail: yup
    .string()
    .email('Incorrect format')
    .required(<FormattedLabel id="enterEmailAddress" />),
  greligionByBirth: yup
    .string()
    .required(<FormattedLabel id="selectReligionby" />),
  greligionByAdoption: yup
    .string()
    .required(<FormattedLabel id="selectAdoptionby" />),
  gstatusAtTimeMarriageKey: yup
    .string()
    .required(<FormattedLabel id="selectStatusAt" />),
  gbuildingNo: yup.string().required(<FormattedLabel id="enterFlat" />),
  gbuildingName: yup.string().required(<FormattedLabel id="enterApartment" />),
  groadName: yup.string().required(<FormattedLabel id="enterRoadName" />),
  glandmark: yup.string().required(<FormattedLabel id="enterLandmark" />),
  gbuildingNoMr: yup.string().required(<FormattedLabel id="enterFlatMr" />),
  gbuildingNameMr: yup
    .string()
    .required(<FormattedLabel id="enterApartmentMr" />),
  groadNameMr: yup.string().required(<FormattedLabel id="enterRoadNameMr" />),
  glandmarkMr: yup.string().required(<FormattedLabel id="enterLandmarkMr" />),
  gcityName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterCity" />),
  gstate: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="state" />),
  gcityNameMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="enterCityMr" />),
  gstateMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="stateMr" />),
  gpincode: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enterPinCode" />)
    .min(6, 'Pincode Number must be at least 6 number')
    .max(6, 'Pincode Number not valid on above 6 number')
    .required(),
  // .number()
  gmobileNo: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enteraadhaarNo" />)
    .min(10, 'Mobile Number must be at least 10 number')
    .max(10, 'Mobile Number not valid on above 10 number')
    .required(),
})

export let brideSchema = yup.object().shape({
  btitle: yup.string().required(<FormattedLabel id="selectTitle" />),
  bfName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterFName" />),
  bmName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterMName" />),
  blName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterLName" />),
  btitleMar: yup.string().required(<FormattedLabel id="selectTitle" />),
  bfNameMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="enterFNameMr" />),
  bmNameMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="enterMNameMr" />),
  blNameMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="enterLNameMr" />),
  bbirthDate: yup
    .date()
    .typeError(<FormattedLabel id="selectDate" />)
    .required(),
  bage: yup
    .number()
    .typeError()
    .min(18, 'Age must be at least 18 year')
    .max(99, 'Age not valid on above 18 year')
    .required(<FormattedLabel id="enterAge" />),
  bgender: yup.string().required(<FormattedLabel id="selectGender" />),
  baadharNo: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enteraadhaarNo" />)
    .min(12, 'Adhar Number must be at least 12 number')
    .max(12, 'Adhar Number not valid on above 12 number')
    .required(),
  bemail: yup
    .string()
    .email('Incorrect format')
    .required(<FormattedLabel id="enterEmailAddress" />),
  breligionByBirth: yup
    .string()
    .required(<FormattedLabel id="selectReligionby" />),
  breligionByAdoption: yup
    .string()
    .required(<FormattedLabel id="selectAdoptionby" />),
  bstatusAtTimeMarriageKey: yup
    .string()
    .required(<FormattedLabel id="selectStatusAt" />),
  bbuildingNo: yup.string().required(<FormattedLabel id="enterFlat" />),
  bbuildingName: yup.string().required(<FormattedLabel id="enterApartment" />),
  broadName: yup.string().required(<FormattedLabel id="enterRoadName" />),
  blandmark: yup.string().required(<FormattedLabel id="enterLandmark" />),
  bbuildingNoMr: yup.string().required(<FormattedLabel id="enterFlatMr" />),
  bbuildingNameMr: yup
    .string()
    .required(<FormattedLabel id="enterApartmentMr" />),
  broadNameMr: yup.string().required(<FormattedLabel id="enterRoadNameMr" />),
  blandmarkMr: yup.string().required(<FormattedLabel id="enterLandmarkMr" />),
  bcityName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterCity" />),
  bstate: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="state" />),
  bcityNameMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="enterCityMr" />),
  bstateMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]+/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    )
    .required(<FormattedLabel id="stateMr" />),
  bpincode: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enterPinCode" />)
    .min(6, 'Pincode Number must be at least 6 number')
    .max(6, 'Pincode Number not valid on above 6 number')
    .required(),
  bmobileNo: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enteraadhaarNo" />)
    .min(10, 'Mobile Number must be at least 10 number')
    .max(10, 'Mobile Number not valid on above 10 number')
    .required(),
})

export let priestSchema = yup.object().shape({
  ptitle: yup.string().required(<FormattedLabel id="selectTitle" />),
  pfName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterFName" />),
  pmName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterMName" />),
  plName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterLName" />),
  pbirthDate: yup
    .date()
    .typeError(<FormattedLabel id="selectDate" />)
    .required(),
  page: yup
    .number()
    .typeError()
    .min(18, 'Age must be at least 18 year')
    .max(99, 'Age not valid on above 18 year')
    .required(<FormattedLabel id="enterAge" />),
  pgender: yup.string().required(<FormattedLabel id="selectGender" />),
  paadharNo: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enteraadhaarNo" />)
    .min(12, 'Adhar Number must be at least 12 number')
    .max(12, 'Adhar Number not valid on above 12 number')
    .required(),
  pemail: yup
    .string()
    .email('Incorrect format')
    .required(<FormattedLabel id="enterEmailAddress" />),
  preligionByBirth: yup
    .string()
    .required(<FormattedLabel id="selectReligionby" />),
  preligionByAdoption: yup
    .string()
    .required(<FormattedLabel id="selectAdoptionby" />),
  pbuildingNo: yup.string().required(<FormattedLabel id="enterFlat" />),
  pbuildingName: yup.string().required(<FormattedLabel id="enterApartment" />),
  proadName: yup.string().required(<FormattedLabel id="enterRoadName" />),
  plandmark: yup.string().required(<FormattedLabel id="enterLandmark" />),
  pcityName: yup.string().required(<FormattedLabel id="enterCity" />),
  pstate: yup.string().required(<FormattedLabel id="state" />),
  ppincode: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enterPinCode" />)
    .min(6, 'Pincode Number must be at least 6 number')
    .max(6, 'Pincode Number not valid on above 6 number')
    .required(),
  pmobileNo: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enteraadhaarNo" />)
    .min(10, 'Mobile Number must be at least 10 number')
    .max(10, 'Mobile Number not valid on above 10 number')
    .required(),
})

export let documentsUpload = yup.object().shape({
  gageProofDocumentKey: yup
    .string()
    .required(<FormattedLabel id="birthProf" />),
  gresidentialDocumentKey: yup
    .string()
    .required(<FormattedLabel id="ResideProof" />),
  gidProofDocumentKey: yup
    .string()
    .required(<FormattedLabel id="IdentyProof" />),
  bageProofDocumentKey: yup
    .string()
    .required(<FormattedLabel id="birthProf" />),
  bresidentialDocumentKey: yup
    .string()
    .required(<FormattedLabel id="ResideProof" />),
  bidProofDocumentKey: yup
    .string()
    .required(<FormattedLabel id="IdentyProof" />),
  presidentialDocumentKey: yup
    .string()
    .required(<FormattedLabel id="ResideProof" />),
  wfResidentialDocumentKey: yup
    .string()
    .required(<FormattedLabel id="ResideProof" />),
  wsResidentialDocumentKey: yup
    .string()
    .required(<FormattedLabel id="ResideProof" />),
  wtResidentialDocumentKey: yup
    .string()
    .required(<FormattedLabel id="ResideProof" />),
  uinvitationCard: yup.string().required(<FormattedLabel id="EnterDocName" />),
  umarrigePhotoCouple: yup
    .string()
    .required(<FormattedLabel id="EnterDocName" />),
  ustampDetail: yup.string().required(<FormattedLabel id="EnterDocName" />),
})

const witnessFieldSchema = {
  wtitle: yup.string().required(<FormattedLabel id="selectTitle" />),
  witnessFName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterFName" />),
  witnessMName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterMName" />),
  witnessLName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterLName" />),
  genderKey: yup.string().required(<FormattedLabel id="selectGender" />),
  witnessAddressC: yup
    .string()
    .required(<FormattedLabel id="witnessAddressC" />),
  aadharNo: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enteraadhaarNo" />)
    .min(12, 'Adhar Number must be at least 12 number')
    .max(12, 'Adhar Number not valid on above 12 number')
    .required(),
  witnessMobileNo: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enteraadhaarNo" />)
    .min(10, 'Mobile Number must be at least 10 number')
    .max(10, 'Mobile Number not valid on above 10 number')
    .required(),
  emailAddress: yup
    .string()
    .email('Incorrect format')
    .required(<FormattedLabel id="enterEmailAddress" />),
  witnessDob: yup
    .date()
    .typeError(<FormattedLabel id="selectDate" />)
    .required(),
  witnessAge: yup
    .number()
    .typeError()
    .min(18, 'Age must be at least 18 year')
    .max(99, 'Age not valid on above 18 year')
    .required(<FormattedLabel id="enterAge" />),
  witnessRelation: yup
    .string()
    .required(<FormattedLabel id="witnessRelation" />),
}

export let witnessDetailsSchema = yup.object().shape({
  witnesses: yup.array().of(yup.object().shape(witnessFieldSchema)),
})
