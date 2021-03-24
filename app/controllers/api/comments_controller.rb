class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy 
  end

  # def show
  # end

  # def update
  #   @comment = comment.find_by(id: params[:id])
  #   if @comment.update(comment_params)
  #     render 'api/comments/show'
  #   else
  #     render json: @comment.errors.full_messages, status: 422
  #   end
  # end

  private
  def comment_params
    params.require(:comment).permit(:track_id, :uploader_id, :body)
  end
end
