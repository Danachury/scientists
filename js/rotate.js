
function onMoreInfoBtnClick(btnIcon, cardId, detailsBoxId) {
	selectCard(findElementById(btnIcon), findElementById(cardId), findElementById(detailsBoxId));
}

function selectCard(btnIcon, card, detailsBox) {
	if ($(card).hasClass('selected')) {
		$(card).removeClass('selected');
		detailsBox.style.display = 'none';
		$(btnIcon).removeClass('fa-minus');
		$(btnIcon).addClass('fa-plus');
	} else {
		var collectionCard = findElementsByClassName('card');
		for (var i = collectionCard.length - 1; i >= 0; i--) {
			if (!isElementsIdEqual(collectionCard[i], card)) {
				$(collectionCard[i]).removeClass('selected');	
			}
		}
		$(card).addClass('selected');

		var detailsBoxCollection = findElementsByClassName('details-box');
		for (var i = detailsBoxCollection.length - 1; i >= 0; i--) {
			if (!isElementsIdEqual(detailsBoxCollection[i], detailsBox)) {
				detailsBoxCollection[i].style.display = 'none';
			}
		}
		detailsBox.style.display = 'block';

		var btnIconCollection = findElementsByClassName('fa');
		for (var i = btnIconCollection.length - 1; i >= 0; i--) {
			if (!isElementsIdEqual(btnIconCollection[i], btnIcon)) {
				$(btnIconCollection[i]).removeClass('fa-minus');
			}
		}

		$(btnIcon).addClass('fa-minus');
	}
}

function findElementById(elementId) {
	return document.getElementById(elementId);
}

function findElementsByClassName(className) {
	return document.getElementsByClassName(className);
}

function findElementId(element) {
	return element.getAttribute('id');
}

function isElementsIdEqual(element1, element2) {
	return findElementId(element1) === findElementId(element2);
}
