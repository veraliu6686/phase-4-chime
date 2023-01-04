class PostsController < ApplicationController
    def index
        render json: Post.all
    end

    def show
        render json: Post.find(params[:id])
    end

    def show_comments
        render json: Post.find(params[:id]).comments
    end

    # def show_users
    #     render json: Post.find(params[:id])
    # end

    def create
        new_post = Post.create!(post_params)
        render json: new_post, status: :created
    end

    def update
        updated_post_likes = Post.find(params[:id])
        updated_post_likes.update(post_params)
        render json: updated_post_likes
    end

    def destroy
        Post.find(params[:id]).destroy
        head :no_content
    end

    private
    def post_params
        params.permit(:description, :image_url, :tag, :user_id, :like_btn)
    end
end



