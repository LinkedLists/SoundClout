class Api::SessionsController < ApplicationController

  # def new
  #   @user = User.new
  #   render 
  # end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user 
      login(@user)
      render '/api/users/show'
    else
      render @user.error.full_messages
    end
  end

  def destroy
    if current_user
      logout
      render :text => "logged out"
    else
      render :text => "not signed in"
    end

  end

end
