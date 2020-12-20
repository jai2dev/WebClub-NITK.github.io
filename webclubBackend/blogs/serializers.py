from rest_framework import serializers
from blogs.models import writerDetails

class writerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = writerDetails
        fields = '__all__'