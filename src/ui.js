class UI {
    constructor() {
        this.titleInput = document.querySelector("#title");
        this.bodyInput = document.querySelector("#body");
        this.posts = document.querySelector("#posts");
        this.idInput = document.querySelector("#id");
        this.postSubmit = document.querySelector(".post-submit");
        this.formState = "add";
    }

    showPosts(posts) {
        let output = "";

        posts.forEach(post => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-pencil"></i>
                        </a>
                        <a href="#" class="delete card-link">
                            <i class="fa fa-remove"></i>
                        </a>
                    </div>
                </div>
            `;
        });

        this.posts.innerHTML = output;
    }

    showAlert(message, className) {
        this.clearAlert();

        const div = document.createElement("div");

        div.className = className;

        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".postsContainer");

        container.insertBefore(div, this.posts);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector(".alert");

        console.log("current alert: ", currentAlert);

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearFields() {
        this.titleInput.value = "";
        this.bodyInput.value = "";
    }
}

export const ui = new UI();
