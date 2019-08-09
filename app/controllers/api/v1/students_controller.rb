class Api::V1::StudentsController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    render json: Student.all
  end

  def create
    student = Student.create(student_params)
  end

  def destroy
    Student.destroy(params[:id])
  end

  def update
    student = Student.find(params[:id])
    student.update_attributes(student_params)
    render json: student
  end

  private

  def student_params
    params.require(:student).permit(:id, :name, :partner, :location)
  end

end