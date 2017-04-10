var dateParser = function(){
    return {
        dateformat: function(string){
            dict = {
                '01':'January',
                '02':'February',
                '03':'March',
                '04':'April',
                '05':'May',
                '06':'June',
                '07':'July',
                '08':'August',
                '09':'September',
                '10':'October',
                '11':'November',
                '12':'December',
            }
            month = dict[string.slice(5,7)];

            return `${month} ${string.slice(8,10)}, ${string.slice(0,4)}`;
            // return month + ' ' + string.slice(8,10) + ', ' + string.slice(0,4)
        }
    }
}();