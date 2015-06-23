function updateValue (elem) {
    elem.className = "noerror";
}

function validateMyForm(form) {
    var res = false,
        error_msg = "";
    error_msg += validateString(form.fullname, "The username is not valid.Please enter a valid username!");
    error_msg += validateEmail(form.email, "The email address is not valid.Please enter a valid email id!",false);
    error_msg += validateString(form.password, "Please enter a valid password!", 8);
   error_msg += validateNumber(form.phone, "Please enter a valid phone number containing only digits!", 5, 10);
    error_msg += validateDate(form.DOB, false);

    if (error_msg != "")

    {
        //alert("Some fields have invalid entry :\n" + error_msg);

        return false;

    }
     var submittedValues = storeFormData(form);
    //alert(JSON.stringify(submittedValues, null, 4))
    return true;
}

var validateString = function (field, errmsg, minLen, maxLen) {
    if (!minLen) {
        minLen = 0;
    }

    if (!maxLen) {
        maxLen = 255;
    }

    //Check whether the field is empty
    if (isNonEmpty(field)) {
        // alert("def");
        if (field.value.length < minLen || field.value.length > maxLen) {
            alert(errmsg);
            document.getElementById(field.id).className = 'error';
            field.focus();
            return errmsg;
        }
    } else {
       errmsg = "The field " + field.name + " is empty.Please fill the required value.";
        alert(errmsg);
        document.getElementById(field.id).className = 'error';
        field.focus();
         return errmsg;
    }
   document.getElementById(field.id).className = "noerror";
    return "";
};

var isNonEmpty = function (field) {
    var str = trim(field.value);
    if (str.length == 0 || str == "") {
        return false;
    }
    return true;
};

var validateNumber = function (field, errmsg, minLen, maxLen) { //anonymous function
    if (!minLen) {
        minLen = 0;
    }

    if (!maxLen) {
        maxLen = 255;
    }

    //Check whether the field is empty
    if (isNonEmpty(field)) {
        //alert(parseInt(field.value));
        //alert(field.value);
        // alert(field.value.toString());
        //field.value = field.value.trim();
        if ((parseInt(field.value) != field.value) || field.value.length < minLen || field.value.length > maxLen) {
            alert(errmsg);
            document.getElementById(field.id).className = 'error';
            field.focus();
            return errmsg;
        }
    } else {
        errmsg = "The field " + field.name + " is empty.Please fill the required value.";
        alert(errmsg);
        document.getElementById(field.id).className = 'error';
        field.focus();
         return errmsg;
    }
   document.getElementById(field.id).className = "noerror";
    return "";

};

var validateEmail = function (field, errmsg, optional) {
var re_mail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    //format of email address in the regular expressions format
    if (isNonEmpty(field)) {
        if (!re_mail.test(trim(field.value))) { //test the occurence of regular expression          in email value  .If no match found then
            alert(errmsg);
            document.getElementById(field.id).className = 'error';
            field.focus();
            return errmsg;
        }

    } else if(!optional){
        errmsg = "The field " + field.name + " is empty.Please fill the required value.";
        alert(errmsg);
        document.getElementById(field.id).className = 'error';
        field.focus();
         return errmsg;
        }
   document.getElementById(field.id).className = "noerror";
    return "";

};

function validateDate(field,optional)
  {
    var minYear = 1902;
    var maxYear = (new Date()).getFullYear();
    var errmsg = "";
    // regular expression to match required date format
    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

    if(isNonEmpty(field)) {
      if(regs = field.value.match(re)) {
        if(regs[1] < 1 || regs[1] > 31) {
          errmsg = "Invalid value for day: " + regs[1];
        } else if(regs[2] < 1 || regs[2] > 12) {
          errmsg = "Invalid value for month: " + regs[2];
        } else if(regs[3] < minYear || regs[3] > maxYear) {
          errmsg = "Invalid value for year: " + regs[3] + " - must be between " + minYear + " and " + maxYear;
        }
      } else {
        errmsg = "Invalid date format: " + field.value;
      }
    } else if(!optional) {
      errmsg = "Empty date not allowed!";
    }

    if(errmsg != "") {
      alert(errmsg);
      field.focus();
      document.getElementById(field.id).className = 'error';
      return errmsg;
    }
   document.getElementById(field.id).className = "noerror";
    return "";
  }

function trim (str)//removes the leading and trailing white spaces
{
     return str.replace (/^\s+|\s+$/g, '');
}

//function used to store form data in the form of an object before submitting 
var storeFormData = function(form) {
    var output_Obj = {},objProp ="",objValue = "";
    for(var i =0;i<form.length;i++) {
        if(form.elements[i].getAttribute("type") != "button" || form.elements[i].getAttribute("type") != "submit") {
            objProp = form.elements[i].name;
            if(form.elements[i].value) {
            objValue = form.elements[i].value;
            } else {
                objValue="null"
            }
          output_Obj[objProp] = objValue;          
        }
    }
    return output_Obj;
}
