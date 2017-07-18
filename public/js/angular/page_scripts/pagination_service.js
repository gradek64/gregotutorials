function PagerService() {
    // service definition

            //this method returns object with all calcuations;
            var devision;
            var previousPage;
            this.GetPager = function(totalItems, currentPage, pageRange) {

                        // default to first page
                        //currentPage = currentPage +1;
                       
                 
                        // default page reange is how many page notificagion to display
                        pageRange = pageRange || 3; //minimum number is 4 !


                        //find out initial devision fror the initial page;
                        //devision = devision || Math.ceil(currentPage/pageRange);
                        devision =  Math.ceil(currentPage/pageRange);

                 
                        // calculate total pages
                        //var totalPages = Math.ceil(totalItems / pageRange);
                        var totalPages = totalItems || currentPage;
                        previousPage=currentPage;


                        
                 
                        var startPage, endPage;
                        if (totalPages <= pageRange) {
                            // less than page ranage show all 
                            startPage = 1;
                            endPage = totalPages;
                        } 

                        else {

                                if(pageRange*devision>totalPages ) {//currentPage!=11 && 
                                    startPage=pageRange*(devision-1);
                                    endPage=totalPages; 
                                }
                                else {

                                    startPage = ((pageRange*devision)-pageRange) ==0 ? 1 : (pageRange*devision)-pageRange;
                                    endPage=pageRange*devision
                                }
                              
                        }


                        var startIndex = (currentPage - 1) * pageRange*devision;
                        var endIndex = Math.min(startIndex + pageRange - 1, totalItems - 1);


            
                        // create an array of pages to ng-repeat in the pager control
                        var pages = _.range(startPage, endPage + 1);
                 
                        // return object with all pager properties required by the view
                        return {
                            totalItems: totalItems,
                            currentPage: currentPage,
                            pageRange: pageRange,
                            totalPages: totalPages,
                            startPage: startPage,
                            endPage: endPage,
                            startIndex: startIndex,
                            endIndex: endIndex,
                            pages: pages
                        };
            }

    //return service;
}

ang.service('PagerService',PagerService);