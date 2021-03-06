@extends('backend.admin.layouts.base')

@section('content')
    <nav>
        <h2 class="sr-only">You are here:</h2>
        <ul class="breadcrumb">
            <li><a>Default Management</a></li>
            <li><a href="{{ route($routeBaseName . '.index') }}">{{ $baseObject->getLabel() }}</a></li>
            <li>Create New</li>
        </ul>
    </nav>

    <h1 class="heading">Create New {{ $baseObject->getLabel() }}</h1>
    <hr />

    <div class="bzg">
        <div class="bzg_c" data-col="l8">
            {!! Form::model($baseObject, ['files'=> true, 'id'=>class_basename($baseObject) . '_form']) !!}
                @include($viewBaseClosure . '.form')

                <div class="bzg">
                    <div class="bzg_c" data-col="l8" data-offset="l4">
                        <a class="btn btn--red" onClick="return confirm('Your changes will be not saved! Are you sure?');" href="{{ route($routeBaseName . '.index') }}">Cancel</a>
                        &nbsp;
                        <input class="btn btn--blue" type="submit" value="Save"/>
                    </div>
                </div>
            {!! Form::close() !!}
        </div>
    </div>
@stop

@section('page_script')
    <script>
    </script>
@stop