const tUbahWarna = document.getElementById('tUbahWarna');

tUbahWarna.onclick= function(){
    // document.body.style.backgroundColor = 'lightgreen';
    // document.body.setAttribute('class', 'hijau-muda');
    document.body.classList.toggle('hijau');
}

const tAcakWarna =document.createElement('button');
const teksTombol =document.createTextNode('AcakWarna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);


tAcakWarna.addEventListener('click', function(){
    const r = Math.round(math.random() * 259 + 1);
    console.log(r);
    document.body.style.backgroundColor = 'rgb('+ r +',0,0)';
})

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
})

const sliderMerah = document.querySelector('input[name=sliderMerah]');
const sliderHijau = document.querySelector('input[name=sliderHijau]');
const sliderBiru = document.querySelector('input[name=sliderBiru]');

sliderMerah.addEventListener('input', function(){
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r +', '+ g +','+b+')';
})

sliderHijau.addEventListener('input', function(){
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r +', '+ g +', '+b+')';
})

sliderBiru.addEventListener('input', function(){
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r +', '+ g +','+b+')';
})

document.body.addEventListener('mousemove', function(event){
   // console.log(event.clientX);
   //console.log(window.innerWidth);

   const xPos =Math.round((event.clientX /  window.innerWidth) * 255);
   const yPos =Math.round((event.clientY /  window.innerWidth) * 255);
   
   document.body.style.backgroundColor = 'rgb('+ xPos +','+yPos+',100)';
});