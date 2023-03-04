



// String 
zoneKey: yup.string().required(<FormattedLabel id="fieldName" />)

// Emai 
aemail: yup
    .string()
    .email('Incorrect format')
    .required(<FormattedLabel id="enterEmailAddress" />)

// Mobile Number 
  amobileNo: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enteraadhaarNo" />)
    .min(10, 'Mobile Number must be at least 10 number')
    .max(10, 'Mobile Number not valid on above 10 number')
    .required(),

// Age 
 gage: yup
    .number()
    .typeError()
    .min(18, 'Age must be at least 18 year')
    .max(99, 'Age not valid on above 18 year')
    .required(<FormattedLabel id="enterAge" />),
	


	
	
// Date 
 marriageDate: yup
    .date()
    .typeError(<FormattedLabel id="selectDate" />)
    .required(),


// Pin Code 
ppincode: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enterPinCode" />)
    .min(6, 'Pincode Number must be at least 6 number')
    .max(6, 'Pincode Number not valid on above 6 number')
    .required()
	




// AadhaNo 
aadharNo: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .typeError(<FormattedLabel id="enteraadhaarNo" />)
    .min(12, 'Adhar Number must be at least 12 number')
    .max(12, 'Adhar Number not valid on above 12 number')
    .required(),





// English Validation 
// String 
 alName: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      'Must be only english characters / फक्त इंग्लिश शब्द ',
    )
    .required(<FormattedLabel id="enterLName" />),


// Marathi Validation
// String 
 amNameMr: yup
    .string()
    .matches(
      /^[\u0900-\u097F]*/,
      'Must be only marathi characters/ फक्त मराठी शब्द',
    ),





// Phone Regex 
/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

// Number Regex 
/^[0-9]+$/



// Password  compare 
 password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Mismatched passwords")
    .required("Please confirm your password")





// 
(?=.{8,}): Set the minimum number of characters

((?=.[!@#$%^&()-=+{};:,<.>]){1}): Verify if there is at least 1 character of the list "!@#$%^&*()-=+{};:,<.>"

(?=.*\d): Verify if there is a digit

((?=.*[a-z]){1}): Verify if there is a lower case alphabetical character

((?=.*[A-Z]){1}): Verify if there is an upper case alphabetical character