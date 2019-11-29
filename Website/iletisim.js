function kontrol()                                    
{ 
    var adi = document.forms["form"]["adi"];               
    var soyadi = document.forms["form"]["soyadi"];  
    var email = document.forms["form"]["email"];    
    var telefon = document.forms["form"]["telefon"];
    var mesaj = document.forms["form"]["mesaj"];    
   
    if (adi.value == "")                                  
    { 
        window.alert("Lütfen Adı alanını düzgün bir biçimde doldurunuz."); 
        adi.focus(); 
        return false; 
    } 
   
    if (soyadi.value == "")                               
    { 
        window.alert("Lütfen Soyadı alanını düzgün bir biçimde doldurunuz."); 
        soyadi.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Lütfen E-mail alanını düzgün bir biçimde doldurunuz."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Lütfen E-mail alanını düzgün bir biçimde doldurunuz."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Lütfen E-mail alanını düzgün bir biçimde doldurunuz."); 
        email.focus(); 
        return false; 
    } 
   
    if (telefon.value == "")                           
    { 
        window.alert("Lütfen Telefon Numarası alanını düzgün bir biçimde doldurunuz."); 
        telefon.focus(); 
        return false; 
    }  

    if (mesaj.value == "")                           
    { 
        window.alert("Lütfen Mesaj alanını düzgün bir biçimde doldurunuz."); 
        mesaj.focus(); 
        return false; 
    }
    
   
    return true; 
}

function Harf(e) 
{

	islem = document.all ? window.event : e;

	karakter = document.all ? islem.keyCode : islem.which;

	if(karakter>=48&&karakter<=57) {

		if(document.all) { islem.returnValue = false; } else { islem.preventDefault(); }

	}

}

function Sayi(e) 
{

	islem = document.all ? window.event : e;

	karakter = document.all ? islem.keyCode : islem.which;

	if(karakter<48||karakter>57) {

		if(document.all) { islem.returnValue = false; } else { islem.preventDefault(); }

	}

}