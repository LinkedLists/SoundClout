class Api::UsersController < ApplicationController
  def create
    # debugger
    @user = User.new(user_params)
    # debugger
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render 'api/users/show' if @user
  end


  private
  def user_params
    params.require(:user).permit(:username, :password, :profile_img)
  end
end
