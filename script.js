$(() => {
	console.log("JQuery loaded...");

	var $mainMenuItems = $("#main-menu ul").children("li"),
		totalMainMenuItems = $mainMenuItems.length,
		openedIndex = 2;

	(init = () => {
		bindEvents();
		if (validIndex(openedIndex))
			animateItem($mainMenuItems.eq(openedIndex), true, 700);
	}),
		(bindEvents = () => {
			$mainMenuItems.children(".images").click(function () {
				var newIndex = $(this).parent().index();
				checkAndAnimateItem(newIndex);
			});

			$(".button")
				.hover($(this).toggleClass("hovered"))
				.click(function () {
					var newIndex = $(this).index();
					checkAndAnimateItem(newIndex);
				});
		}),
		(validIndex = (indexToCheck) => {
			return indexToCheck >= 0 && indexToCheck < totalMainMenuItems;
		}),
		(animateItem = ($item, toOpen, speed) => {
			var $colorImage = $item.find(".color"),
				itemParam = toOpen ? { width: "420px" } : { width: "140px" },
				colorImageParam = toOpen ? { left: "0px" } : { left: "140px" };
			$colorImage.animate(colorImageParam, speed);
			$item.animate(itemParam, speed);
		}),
		(checkAndAnimateItem = (indexToCheckAndAnimate) => {
			if (openedIndex === indexToCheckAndAnimate) {
				animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
				openedIndex = -1;
			} else {
				if (validIndex(indexToCheckAndAnimate)) {
					animateItem($mainMenuItems.eq(openedIndex), false, 250);
					openedIndex = indexToCheckAndAnimate;
					animateItem($mainMenuItems.eq(openedIndex), true, 250);
				}
			}
		});

	init();
});
