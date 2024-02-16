document.getElementById('btn').addEventListener('click', function() {
    let getkg = parseFloat(document.getElementById('kg').value);
    let getfeet = parseFloat(document.getElementById('feet').value);
    let getinches = parseFloat(document.getElementById('inches').value);
    let getname=document.getElementById('name').value;
    let progress=document.getElementById('progress');
    let radial=document.getElementById('radial')
    
    let name=getname.toUpperCase();
    let kg = parseInt(getkg);
    let feet = parseInt(getfeet);
    let inches = parseInt(getinches);
    let totInches = (feet * 12) + inches;
    let meters = totInches / 39.37;
    let bme = kg / (meters * meters);
    let bmi =bme.toFixed(2);
    if (isNaN(bmi)) {
        alert("Sorry!All Values Are Required!");
        return;
    }
    let sbmi=bmi.toString();
    
    
    document.getElementById('kg').value = '';
    document.getElementById('inches').value = '';
    document.getElementById('feet').value = '';
    document.getElementById('name').value = '';
    progress.setAttribute('value',`${sbmi}`)
    radial.setAttribute('style',`--value:${(sbmi*100)/40}`)
    radial.innerText=`${sbmi}`;
    const p=document.getElementById('span')
    p.style.color='pink';
    p.style.fontSize='1rem';
    //p.innerText=name+' Your BMI is :'+bmi;
    if(bmi>=17 && bmi<=23)
    {
        p.innerText=name+' Your BMI is :'+bmi + '. You are rittik roshan';
        radial.style.color='lightgreen'
        p.style.color='lightgreen'
    }
    else if(bmi>23 && bmi<=30)
    {
        p.innerText=name+' Your BMI is : '+bmi + ' .  Tomar to vuri dkha jai';
        radial.style.color='yellow'
        p.style.color='yellow'
    }
    const result=document.getElementById('result');
    result.appendChild(p);
});