//


function kilometerToMeter(kilometer){
    if(kilometer>=0){
        var meter=kilometer*1000;
        return meter;
    }
    else{
        return 'In the case of meters the subtraction value is not converted';
    }
}




function budgetCalculator(watch, phone, laptop) {
	if ((typeof watch == "number" && watch >= 0) && (typeof phone == "number" && phone >= 0) && (typeof laptop == "number" && laptop >= 0)){ 
		var watch = watch * 50;
		var phone = phone * 100;
        var laptop = laptop * 500; 
        
		var totalCost = watch + phone + laptop;

		return totalCost;
    } 

    else {
		return budgetCalculator;
	}
}




function hotelCost(day){
    var fare=0;
    if(day<=10){
        fare =day*100;
    }
    else if(day <=20){
        var firstConditionFare=10*100;
        var remaining=day-10;
        var secondConditionFare=remaining*10;
        fare=firstConditionFare+secondConditionFare;
    }
    else{
        var firstConditionFare=10*100;
        var secondConditionFare=10*80;
        var remaining=day-20;
        var thirdConditionFare=remaining*50;
        fare=firstConditionFare+secondConditionFare+thirdConditionFare;
    }
    return fare;
}




function megaFriend(){
    
}



