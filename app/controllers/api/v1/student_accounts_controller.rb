class Api::V1::StudentAccountsController < ApplicationController
  protect_from_forgery with: :null_session
  def new
    @student_account = StudentAccount.new
  end

  def create
    @student_account = StudentAccount.create(student_account_params)
    if @student_account.save
      p 'hello'
      session[:student_account_id] = @student_account.id
      redirect to '/'
    else
      p 'hi'
      redirect_to '/signup'
    end
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
    params.require(:student_account).permit(:id, :firstname, :lastname, :password)
  end
end