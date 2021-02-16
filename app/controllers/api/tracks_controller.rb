class Api::TracksController < ApplicationController
  def create
    @track = Track.new(user_params)
    if @track.save
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
  end

  def index
    @tracks = Track.all
    render 'api/tracks/index'
  end

  def destroy
    @track = Track.find_by(id: params[:id])
    render 'api/tracks/index' if @track.destroy 
  end

  def show
    @track = Track.find_by(id: params[:id])
    render 'api/tracks/show' if @track
  end

  private
  def track_params
    params.require(:track).permit(:title, :description, :genre)
  end

end
