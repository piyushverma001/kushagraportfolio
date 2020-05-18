
const ACCESS_TOKEN= "ya29.a0AfH6SMCMAPRF3RQraEs6u34Iwc7mWLro_Ll2mjTF85ZSAVxngnqaVcRgKa56i11aeDKIEuvMLRuQNu5luQrK37EWyvqsDlu4uJr3SvcN_mGoGs9mEbXqDrGkPS8xXQXNX1wYgviNSCSg1uQfrhtEnLBOz2Ocdtl2QH0";
const SHEET_ID = "1JAxII2tYVAgwYvrZYC0InUl2CzeuaGr8dgEjcm1C8pY"

const getValues = async () =>{
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:D5`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`  
    }
    });
    const data = await request.json();
    console.log(data.values);
    return data;
  }
  


export default getValues;