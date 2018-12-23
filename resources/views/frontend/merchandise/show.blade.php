@extends('frontend.layout.base_frontend')

@section('body-content')
    <!--[if lte IE 9]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div class="sticky-footer-container">
        <div class="sticky-footer-container-item">
            @include('frontend.partials.header-detail')
        </div>
        <div class="sticky-footer-container-item --pushed main--page">
            <main class="site-main">
                <div class="page-head">
                    <div class="container">
                        <div class="page-head__title text-center text-caps">
                            <h3 class="mb-0 font-normal text-maroon">For Sell</h3>
                            <h1 class="text-caps font-secondary main-title">
                                <span>TICKET</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                <div class="accordeon">
                    <div class="accordeon__item">
                        <button class="btn btn-accordeon rounded" type="button">
                            <span class="btn-text">
                            <strong>BOOK NOW!</strong>
                            </span>
                            <span class="btn-icon fa fa-angle-down" aria-hidden="true"></span>
                        </button>
                        <div class="accordeon-content">
                                <p>
                                <input name="firstname" type="text" placeholder="Name"><br><br>
                                <input name="firstname" type="number" placeholder="Identity Number"><br><br>
                                <input name="firstname" type="text" placeholder="Email"><br><br>
                                <input name="firstname" type="number" placeholder="Phone Number"><br><br>
                                <!-- <textarea name="message" rows="5" cols="123" placeholder="Drop your question here."></textarea><br><br> -->
                                Jumlah Tiket : 
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select> <br><br>
                                Pembayaran : 
                                <select class="form-control" id="exampleFormControlSelect1">
                                <option>Online</option>
                                <option>Offline</option>
                                </select> <br><br>
                                <input type="submit">
                                 </p>
                        </div>
                    </div>
                </div>
                <br>
            </main>
        </div>
        <div class="sticky-footer-container-item">
                @include('frontend.layout.footer')
        </div>
    </div>

    @include('frontend.partials.scripts')
@endsection
