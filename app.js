const list_items = [
    "James", "Robert", "John", "Michael", "David", "William", "Richard", "Joseph", "Thomas",
    "Christopher", "Charles", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven",
    "Andrew", "Paul", "Joshua", "Kenneth", "Kevin"
];

const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
const rows = 5;

const DisplayList = (items, wrapper, rows_per_page, page) => {
    wrapper.innerHTML = "";
    page--;
    const start = rows_per_page * page;
    const end = start + rows_per_page;
    const paginatedItems = items.slice(start, end);

    for (const item of paginatedItems) {
        const item_element = document.createElement("div");
        item_element.classList.add("item");
        item_element.innerText = item;
        wrapper.appendChild(item_element);
    }
};

const SetupPagination = (items, wrapper, rows_per_page) => {
    wrapper.innerHTML = "";
    const page_count = Math.ceil(items.length / rows_per_page);
    console.log(page_count);
    for (let i = 1; i < page_count + 1; i++) {
        const btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }
};

const PaginationButton = (page, items) => {
    const button = document.createElement("button");
    button.innerText = page;
    if (current_page === page) button.classList.add("active");
    button.addEventListener('click', () => {
        current_page = page;
        DisplayList(items, list_element, rows, current_page);

        const current_btn = document.querySelector('.pagenumbers button.active');
        current_btn.classList.remove('active');

        button.classList.add('active');
    });

    return button;
};

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);
