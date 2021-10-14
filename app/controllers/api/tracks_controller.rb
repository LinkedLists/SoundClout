class Api::TracksController < ApplicationController
  def create
    @track = Track.new(track_params)
    if @track.save
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def index 
    @tracks = Track.includes(:uploader).all
    render 'api/tracks/index'
  end

  def show
    @track = Track.includes(:comments, :uploader).find_by(id: params[:id])
    render 'api/tracks/show' if @track
  end

  def update
    @track = Track.find_by(id: params[:id])
    if @track.update(track_params)
      render 'api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
  end

  private
  def track_params
    params.require(:track).permit(:title, :uploader_id, :description, :genre, :audio_file, :photo_file)
  end

end
