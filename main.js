function goToSection(sectionID){
    document.getElementById(sectionID).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}