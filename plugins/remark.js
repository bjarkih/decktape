function Remark(page) {
    this.page = page;
}

// TODO: improve backward compatibility (e.g. getCurrentSlideIndex was getCurrentSlideNo in earlier versions)
Remark.prototype = {

    getName : function() {
        return "Remark JS";
    },

    isActive : function() {
        return page.evaluate(function() {
            return typeof remark == "object" && slideshow === "object";
        });
    },

    slideCount : function() {
        return page.evaluate(function() {
            return slideshow.getSlideCount();
        });
    },

    hasNextSlide : function() {
        return page.evaluate(function() {
            return slideshow.getCurrentSlideIndex() + 1 < slideshow.getSlideCount();
        });
    },

    nextSlide : function() {
        page.evaluate(function() {
            slideshow.gotoNextSlide();
        });
    },

    currentSlideIndex : function() {
        return page.evaluate(function() {
            return slideshow.getCurrentSlideIndex() + 1;
        });
    }
};

exports.create = function(page) {
    return new Remark(page);
};