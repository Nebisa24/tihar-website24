function checknum()
{
    let num= document.getElementById("num").value;
    document.getElementById("p1").innerHTML="";
    document.getElementById("p3").innerHTML="";
    document.getElementById("p7").style.display="none";
    document.getElementById("p4").style.display="none";
if (num==1){
 document.getElementById("p1").innerHTML="Kaag Tihar";
 document.getElementById("p3").innerHTML="Kaag Tihar is the first day of Tihar, dedicated to crows, the messengers of news and information. People offer food to crows early in the morning as a sign of respect and gratitude. This day reminds us to live in harmony with nature and all living beings.";
 document.getElementById("p7").src="kaag.jpg";
 document.getElementById("p7").style.display="inline";
}
else if (num==2)
{
    document.getElementById("p1").innerHTML="Kukur Tihar";
    document.getElementById("p3").innerHTML="Kukur Tihar is a special day of the Tihar festival in Nepal dedicated to honoring dogs for their loyalty, protection, and companionship. On this day, dogs are decorated with flower garlands, given tika, and offered delicious food. It reflects respect and gratitude for the important role dogs play in human life.";
    document.getElementById("p7").src="kukur.jpg";
    document.getElementById("p7").style.display="inline";
}
else if (num==3)
{
    document.getElementById("p1").innerHTML="Gai Tihar and Laxmi Puja";
    document.getElementById("p3").innerHTML="In morning,Gai Tihar is  dedicated to worshipping cows, which are considered sacred and a symbol of prosperity in Hindu culture. Cows are decorated with flower garlands, tika, and offered special food. The day expresses gratitude for their importance in daily life and agriculture.It is also the national animal of Nepal.";
    document.getElementById("p7").src="cow.jpg";
    document.getElementById("p7").style.display="inline";
    document.getElementById("p3").innerHTML+="<br><br>In evening,Laxmi Puja is celebrated and it is one of the most important days of Tihar, dedicated to Goddess Laxmi, the goddess of wealth and prosperity. Homes and workplaces are cleaned, decorated with lights and rangoli, and prayers are offered to welcome blessings, happiness, and good fortune. Families light oil lamps and candles to guide Goddess Laxmi into their homes.People also play deusi-bhailo and burn fire-crackers.";
    document.getElementById("p4").src="laxmipuja.jpg";
    document.getElementById("p4").style.display="inline";
}
 else if (num==4)
 {
    document.getElementById("p1").innerHTML="Goru Tihar and Mha puja";
    document.getElementById("p3").innerHTML="Goru Tihar is celebrated during Tihar to honor oxen (goru), which plays an important role in farming and agriculture. Oxen are decorated with flower garlands, tika, and offered special food as a sign of gratitude for their hard work. The day recognizes their contribution to supporting farmers and sustaining livelihoods.";
    document.getElementById("p7").src="ox.jpg";
    document.getElementById("p7").style.display="inline";
    document.getElementById("p3").innerHTML+="<br><br>Mha Puja is a unique Newari tradition celebrated during Tihar that focuses on self-worship and self-respect. It symbolizes purification, well-being, and appreciation of one's own soul and life. People perform rituals and seek blessings for good health, prosperity, and a long life.";
    document.getElementById("p4").src="mha-puja.jpg";
    document.getElementById("p4").style.display="inline";
}
 else if (num==5)
 {
    document.getElementById("p1").innerHTML="Bhai Tika";
    document.getElementById("p7").src="vaitika.jpg";
    document.getElementById("p7").style.display="inline";
    document.getElementById("p3").innerHTML="Bhai Tika is the final and most important day of Tihar, celebrating the special bond between brothers and sisters. Sisters apply a colorful seven-colored tika to their brothers and pray for their long life, happiness, and success. In return, brothers give gifts and promise to protect and support their sisters.";
}
else
{
    document.getElementById("p1").innerHTML="Please enter valid number:";
}
}
