	 $(document).ready(function () {
            console.log("start");
            $('.lukkeklik').click(function () {
                var navbar_toggle = $('.navbar-toggle');
                if (navbar_toggle.is(':visible')) {
                    navbar_toggle.trigger('click');
                }
            });

        });
