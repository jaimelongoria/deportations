$(document).ready(() => {
	const watcher = new Watch($("#all_conviction"));

	watcher.inView(() => {
		$(".dot").each(function (i, el) {
			setTimeout(() => {
				const $dot = $(this);

				$dot.addClass("dot_appear");
			}, 10 * (1 + (i / 10)));

		});

		$(".arrow").addClass("arrow_hidden");

	});









	//	watcher.outView(() => {
	//		$(".dot.dot_appear").removeClass("dot_appear");
	//	});

	console.log(watcher);
});





$(document).ready(() => {
	const watcher = new Watch($("#no_conviction"));

	watcher.inView(() => {
		$(".no_conviction").addClass("dot_gray");
	});
});

$(document).ready(() => {
	const watcher = new Watch($("#zoom"));

	watcher.inView(() => {
		$(".graphic").addClass("metrics");
	});
});

$(document).ready(() => {
	const watcher = new Watch($("#sell"));

	watcher.inView(() => {
		$(".sell").addClass("dot_sell");
	});
});


$(document).ready(() => {
	const watcher = new Watch($("#possession"));

	watcher.inView(() => {
		$(".possession").addClass("dot_possession");
	});
});


$(document).ready(() => {
	const watcher = new Watch($("#marijuana_default"));

	watcher.inView(() => {
		$(".marijuana_default").addClass("dot_default");
	});
});


$(document).ready(() => {
	const watcher = new Watch($("#smuggle"));

	watcher.inView(() => {
		$(".smuggle").addClass("dot_smuggle");
	});
});