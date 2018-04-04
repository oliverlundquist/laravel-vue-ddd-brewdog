<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
        <title>Vue.js Domain Driven Design app with Vuex, Vue-Router and TypeScript</title>
    </head>
    <body>
        <div id="app"></div>
        <script>
            window.laravel_config = {
                APP_ENV: "{{ env('APP_ENV') }}",
                locale: "{{ config('app.locale') }}",
                fallbackLocale: "{{ config('app.fallback_locale') }}"
            }
        </script>
        <script src="{{ mix('/js/bootstrap.js') }}"></script>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>