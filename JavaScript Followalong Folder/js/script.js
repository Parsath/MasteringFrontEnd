function Course(title, instructor, level, published, views){
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.publishd = published;
    this.views = views;
    this.updateViews = function() {
        return ++this.views;
    };
}

var course01 = new Course("Blabou", "Bilel", 4, false, 0);
console.log(course01);