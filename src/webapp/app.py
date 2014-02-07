from flask import Flask
from flask.ext.admin import Admin, BaseView, expose
from frontend import frontend

class MyView(BaseView):
    @expose('/')
    def index(self):
        return self.render('admin/index.html')

app = Flask(__name__)
app.register_blueprint(frontend)

admin = Admin(app)
admin.add_view(MyView(name='Hello'))

if(__name__ == "__main__"):
   app.run(debug=True)