# -*- encoding: utf-8 -*-
from datetime import datetime

from django.core.context_processors import csrf
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.generic.base import View
# from django.utils.decorators import method_decorator


class MainView(View):

	template_name = 'app/index.html'

	def get(self, request):
		template_values = {
				# template values here
				'now': datetime.now(),
				}
		template_values.update(csrf(request))
		return render(request, self.template_name, template_values)

	"""Use this when disable django's CSRF protection"""
	# @method_decorator(csrf_exempt)
	# def dispatch(self, *args, **kwargs):
		# return super(MainView, self).dispatch(*args, **kwargs)
