@extends('backend.admin.layouts.base')

@section('content')
<!-- BEGIN PAGE BAR -->
<div class="page-bar">
    <ul class="page-breadcrumb">
        <li>
            <a>Performer Management</a>
            <i class="fa fa-circle"></i>
        </li>
        <li>
            <a href="{{ route('backend.performer.show', ['id'=>$baseObject->performer_id]) }}">{{ ($baseObject->performer ? $baseObject->performer->getFormattedValue() : "Unknown Performer") }}</a>
            <i class="fa fa-circle"></i>
        </li>
        <li>
            Add New {{ $baseObject->_label }}
        </li>
    </ul>
</div>
<!-- END PAGE BAR -->

<!-- FLASH NOTIFICATION -->
@include('backend.admin.partials.flashnotification')

<!-- BEGIN PAGE TITLE-->
<h3 class="page-title">Add New {{ $baseObject->_label }} To {{ ($baseObject->performer ? $baseObject->performer->getFormattedValue() : "Unknown Performer") }}
    <!-- <small>subtitle</small> -->
</h3>
<!-- END PAGE TITLE-->
<!-- BEGIN CONTENT -->
<div class="row">
    <div class="col-md-12">
        <!-- BEGIN FORM PORTLET-->
        <div class="portlet light bordered">
            <div class="portlet-title">
                <div class="caption font-green-haze">
                    <i class="{{ $pageIcon or 'icon-badge'}} font-green-haze"></i>&nbsp;
                    <span class="caption-subject bold uppercase">{{ $baseObject->_label }} Form</span>
                </div>
                <div class="actions">
                    <a class="btn btn-circle btn-icon-only btn-default fullscreen" href="javascript:;" data-original-title="" title=""> </a>
                </div>
            </div>
            <div class="portlet-body form">
                {!! Form::model($baseObject, ['files'=> true, 'id'=>class_basename($baseObject) . '_form']) !!}

                    @include($viewBaseClosure . '.form')

                    <div class="form-actions">
                    </div>
                    <div class="form-actions">
                        <div class="row">
                            <div class="col-md-offset-2 col-md-10">
                                <input type="submit" class="btn blue" value="Save"/>
                                <a class="btn default" onClick="return confirm('Your changes will be not saved! Are you sure?');" href="{{ route('backend.performer.show', ['id' => $baseObject->performer_id]) }}">Cancel</a>
                            </div>
                        </div>
                    </div>

                {!! Form::close() !!}
            </div>
        </div>
        <!-- END FORM PORTLET-->
    </div>
</div>
<!-- END CONTENT -->
@stop

@section('page_script')
    <script>
    </script>
@stop