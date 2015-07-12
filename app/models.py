# -*- coding: utf-8 -*-
from google.appengine.ext import ndb


class MyModel(ndb.Model):
	author = ndb.UserProperty()  # dummy property
