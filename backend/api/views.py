from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Feature
from .serializers import FeatureSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET', 'POST'])
def feature_list(request):
    if request.method == 'GET':
        features = Feature.objects.all().order_by('-upvotes')
        serializer = FeatureSerializer(features, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FeatureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['POST'])
def upvote_feature(request, pk):
    feature = get_object_or_404(Feature, pk=pk)
    feature.upvotes += 1
    feature.save()
    serializer = FeatureSerializer(feature)
    return Response(serializer.data)
