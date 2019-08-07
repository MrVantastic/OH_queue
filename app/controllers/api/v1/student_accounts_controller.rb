class Api::V1::StudentAccountsController < ApplicationController
  def index
    render json: StudentAccount.all
  end

  def create
    student_account = StudentAccount.create(fruit_params)
    render json: student_account
  end

  def destroy
    StudentAccount.destroy(params[:id])
  end

  def update
    student_account = StudentAccount.find(params[:id])
    student_account.update_attributes(student_account_params)
    render json: student_account
  end

  private

  def student_account_params
    params.require(:student_account).permit(:id, :firstname, :lastname, :password_digest)
  end
end