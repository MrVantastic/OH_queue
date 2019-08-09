class StudentsController < ApplicationController
  protect_from_forgery with: :null_session
  def new
    @student = Student.new
  end

end
