# -*- coding: utf-8 -*-
from django.conf.urls import patterns

from views import MainView


urlpatterns = patterns('',
	(r'^', MainView.as_view()),
)
