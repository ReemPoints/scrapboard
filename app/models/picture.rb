class Picture < ApplicationRecord
	mount_uploader :filename, PictureUploader
end
