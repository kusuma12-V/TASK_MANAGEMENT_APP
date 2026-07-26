from flask import Blueprint, request, jsonify
from models import User, Task
from database.db import db

routes = Blueprint("routes", __name__)


@routes.route("/")
def home():
    return {"message": "Task Management API Running Successfully"}


# ---------------- REGISTER ----------------
@routes.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    existing = User.query.filter_by(email=data["email"]).first()

    if existing:
        return jsonify({"message": "Email already exists"}), 400

    user = User(
        name=data["name"],
        email=data["email"],
        password=data["password"]
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User Registered Successfully"})


# ---------------- LOGIN ----------------
@routes.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    user = User.query.filter_by(
        email=data["email"],
        password=data["password"]
    ).first()

    if user:
        return jsonify({
            "message": "Login Successful",
            "name": user.name
        })

    return jsonify({"message": "Invalid Email or Password"}), 401


# ---------------- ADD TASK ----------------
@routes.route("/tasks", methods=["POST"])
def add_task():

    data = request.get_json()

    task = Task(
        title=data["title"],
        description=data["description"],
        status=data.get("status", "Pending")
    )

    db.session.add(task)
    db.session.commit()

    return jsonify({"message": "Task Added Successfully"})


# ---------------- GET TASKS ----------------
@routes.route("/tasks", methods=["GET"])
def get_tasks():

    tasks = Task.query.all()

    result = []

    for task in tasks:

        result.append({
            "id": task.id,
            "title": task.title,
            "description": task.description,
            "status": task.status
        })

    return jsonify(result)


# ---------------- UPDATE TASK ----------------
@routes.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id):

    task = Task.query.get(id)

    if not task:
        return jsonify({"message": "Task not found"}), 404

    data = request.get_json()

    task.title = data["title"]
    task.description = data["description"]
    task.status = data["status"]

    db.session.commit()

    return jsonify({"message": "Task Updated Successfully"})


# ---------------- DELETE TASK ----------------
@routes.route("/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):

    task = Task.query.get(id)

    if not task:
        return jsonify({"message": "Task not found"}), 404

    db.session.delete(task)
    db.session.commit()

    return jsonify({"message": "Task Deleted Successfully"})