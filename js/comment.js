//! Fitur Commentar
function getComment() {
	const container = document.querySelectorAll(".comment .row")[1];
	let username = document.getElementById("username");
	let email = document.getElementById("email");
	let subject = document.getElementById("subject");
	let comment = document.getElementById("comment");
	let commentBtn = document.getElementById("btn-comment");
	commentBtn.addEventListener("click", function () {
		if (username.value == "" || email.value == "" || subject.value == "" || comment.value == "") return;
		const createDiv = document.createElement("div");
		const comentContent = () => {
			return `<div class="left p-0 d-flex">
                            <img src="img/user.jpg" alt="user-image">
                            <div class="text d-flex flex-column mx-3">
                                <b class="username">${username.value}</b>
                                <p class="subject">${subject.value}</p>
                                <p class="user-comment">${comment.value}</p>
                            </div>
                        </div>
                        <h6>Reply</h6>`;
		};
		createDiv.classList.add("col-lg-12", "d-flex", "justify-content-between", "mb-2");
		comentContent();
		createDiv.innerHTML = container.lastElementChild.after(createDiv);
	});
}
getComment();
