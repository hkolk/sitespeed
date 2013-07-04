<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript">
            window.sitespeed = {};
            window.sitespeed.domStart = new Date().getTime();
            window.sitespeed.sessionId = 'harm-session';
            window.sitespeed.pageId = '<?=uniqid();?>';
        </script>
    </head>
    <body>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>

        <script type="text/javascript">
            var ts = new Date().getTime();
            document.write("<sc"+"ript src=\"sitespeed.js?" + ts + "\" type=\"text/javascript\"></"+"script>");
        </script>

        <script>
            $(window).load(function() {
                $.post(
                    'sensor.php',
                    window.sitespeed.collect()
                ).done(function(response) {
                    console.log("Data Saved: " + response);
                });
            });
        </script>

        <a href="?<?=time()?>">Clickie</a>
        <script>window.sitespeed.event("beforeBanner");</script>
        <script>window.sitespeed.event("afterBanner");</script>
    </body>
</html>
