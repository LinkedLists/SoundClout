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

  # def update
  # end

  private
  def track_params
    # maybe add media urls as params
    params.require(:track).permit(:title, :uploader_id ,:description, :genre)
  end

end
