$(function drawCity(){
   
   const cityName = $("#cityName");
   const cityUrl = $("#cityUrl");
   const btnAdd = $("#btnAdd") 
   const container =$("#row")
   

    btnAdd.on("click",function(){
        if(checkField()){
            container.append(drawCard())
            likeButoon()
        }
    })

    function checkField(){
        if(cityName.val() === "" || cityUrl.val()==="")
            return false
            return true;
    }

    function drawCard(){
        
        const likeUrl ="https://i.pinimg.com/originals/c0/d2/16/c0d21611b7e1ef0bf8486900301822a4.png"

        const card=$(`<div></div>`).addClass("card").css("width", "18rem")
        const cardImage =$(`<img/>`).attr({src:cityUrl.val()}).addClass("card-img-top")
        const cardCityName =$(`<h5></h5>`).text(`${cityName.val()}`).addClass("card-title")
        const cardLike =$("<img/>").css({
            height:36,
            width:36,
        }).attr({src:likeUrl}).addClass("likebtn")

        const cardCountLike = $("<span>")
        cardCountLike.text("0")

        card.append(cardImage).append(cardCityName).append(cardLike).append(cardCountLike)
        cardLike.click(function(){
            let counter = cardCountLike.text()
            cardCountLike.text(++counter)
        })     
        return card

    }

});