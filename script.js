let followers = 0;

function follow() {
    followers++;
    document.getElementById("followers").innerHTML =
    "Followers: " + followers;
}


function addPost() {

    let text = document.getElementById("postText").value;

    if(text === "") {
        return;
    }

    let post = document.createElement("div");

    post.className = "post";

    post.innerHTML = `
    <h3>Anbu</h3>
    <p>${text}</p>

    <button onclick="like(this)">Like</button>
    <span>0</span>

    <br><br>

    <input placeholder="Comment">
    <button onclick="comment(this)">Comment</button>

    <div class="comments"></div>
    `;

    document.getElementById("posts").appendChild(post);

    document.getElementById("postText").value = "";
}


function like(btn) {

    let count = btn.nextElementSibling;

    count.innerHTML = Number(count.innerHTML) + 1;

}


function comment(btn) {

    let input = btn.previousElementSibling;

    let commentBox = btn.parentElement.querySelector(".comments");

    if(input.value !== "") {

        commentBox.innerHTML += 
        "<p>💬 " + input.value + "</p>";

        input.value = "";

    }

}
