function openLink(url) {
    window.open(url, '_blank'); // فتح الرابط في نافذة جديدة
}

function goBack() {
    window.history.back(); // للعودة للصفحة السابقة
}

function addSite() {
    const siteName = prompt("Enter site name:");
    const siteUrl = prompt("Enter site URL:");
    
    if (siteName && siteUrl) {
        const iconGrid = document.getElementById("iconGrid");
        const newIcon = document.createElement("div");
        newIcon.className = "icon";
        newIcon.innerText = siteName;
        newIcon.onclick = function() {
            openLink(siteUrl);
        };
        iconGrid.insertBefore(newIcon, iconGrid.lastChild); // إضافة الأيقونة قبل أيقونة الإضافة
    } else {
        alert("Please enter both site name and URL.");
    }
}